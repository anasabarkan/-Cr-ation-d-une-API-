import * as destinationService from '../services/destination_service.js';

export const createDestination = async (req, res) => {
    try {
        const destination = await destinationService.createDestination(req.body);
        res.status(201).json(destination);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getDestinations = async (req, res) => {
    try {
        const destinations = await destinationService.getDestinations();
        res.status(200).json(destinations);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

