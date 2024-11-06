import Reservation from '../models/reservation_model.js';

export const createReservation = async (data) => {
    const reservation = new Reservation(data);
    return await reservation.save();
};

export const getReservations = async () => {
    return await Reservation.find()
        .populate('destinationId')
        .populate('voyageurId');
};

