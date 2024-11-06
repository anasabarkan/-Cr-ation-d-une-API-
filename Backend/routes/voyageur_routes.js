import express from 'express';
import * as voyageurController from '../controllers/voyageur_controller.js';

const router = express.Router();

router.post('/', voyageurController.createVoyageur);
router.get('/', voyageurController.getVoyageurs);

export default router;
