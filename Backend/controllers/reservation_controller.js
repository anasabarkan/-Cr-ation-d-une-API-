import * as reservationService from '../services/reservation_service.js';

export const createReservation = async (req, res) => {
    try {
        const reservation = await reservationService.createReservation(req.body);
        res.status(201).json(reservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getReservations = async (req, res) => {
    try {
        const reservations = await reservationService.getReservations();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

