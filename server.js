import express from 'express'
//import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '@prisma/client';
import osRoutes from './routes/os.routes.js'

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
res.send('Protótipo OS')
});

app.get('/ordens', async (req, res) => {
res.send('Lista de Ordens (TBD)')
});

app.use('/api/ordens', osRoutes);

app.listen(PORT, () => {
    console.log(`server rodando no http://localhost:${PORT}`);
});