import * as voyageurService from '../services/voyageur_service.js';

export const createVoyageur = async (req, res) => {
    try {
        const existingVoyageur = await voyageurService.getVoyageurByEmail(req.body.email);
        if (existingVoyageur) {
            return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
        }

        const voyageur = await voyageurService.createVoyageur(req.body);
        res.status(201).json(voyageur);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getVoyageurs = async (req, res) => {
    try {
        const voyageurs = await voyageurService.getVoyageurs();
        res.status(200).json(voyageurs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
