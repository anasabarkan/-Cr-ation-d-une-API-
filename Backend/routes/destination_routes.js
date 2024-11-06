import express from 'express';
import * as destinationController from '../controllers/destination_controller.js';

const router = express.Router();

router.post('/', destinationController.createDestination);
router.get('/', destinationController.getDestinations);

export default router;
