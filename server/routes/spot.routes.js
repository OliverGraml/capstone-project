import express from 'express';
import {postSpot, getSpot} from '../controller/club.controller.js';

const router = express.Router();

router.post('/spot', postSpot);

router.get('/spot', getSpot);

export default router;
