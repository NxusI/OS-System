import prisma from '../prismaClient.js';

export const getOS = async (req, res) => {
    try {
        // sintaxe do prisma pra checagem
        const osList = await prisma.equipamento.findMany({
            // O 'include' faz o papel do JOIN no SQL
            include: {
                cliente: {
                    select: { name: true, email: true }
                }
            },
            orderBy: {
                id: 'desc'
            }
        });

        return res.status(200).json(osList);

    } catch (error) {
        console.error("Erro ao buscar OS (Prisma):", error);
        return res.status(500).json({ mensagem: 'Erro interno no servidor ao buscar OS.' });
    }
};