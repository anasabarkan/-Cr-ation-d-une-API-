import Destination from '../models/destination_model.js';

export const createDestination = async (data) => {
    const destination = new Destination(data);
    return await destination.save();
};

export const getDestinations = async () => {
    return await Destination.find();
};

