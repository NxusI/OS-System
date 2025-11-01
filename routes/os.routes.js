import express from 'express'
import { getOS } from '../controllers/os.controller.js';
import { criarOrdem } from '../controllers/os.controller.js';
const router = express.Router();

router.get('/', getOS);
router.post('/', criarOrdem);

export default router;