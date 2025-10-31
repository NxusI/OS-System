import express from 'express'
import { getOS } from '../controllers/os.controller.js';
const router = express.Router();

router.get('/', getOS);

export default router;