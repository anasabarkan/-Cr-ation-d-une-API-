import express from 'express';
import * as reservationController from '../controllers/reservation_controller.js';

const router = express.Router();

router.post('/', reservationController.createReservation);
router.get('/', reservationController.getReservations);

export default router;
