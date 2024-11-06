import Voyageur from '../models/voyageur_model.js';

export const createVoyageur = async (data) => {
    const voyageur = new Voyageur(data);
    return await voyageur.save();
};

export const getVoyageurs = async () => {
    return await Voyageur.find();
};

export const getVoyageurByEmail = async (email) => {
    return await Voyageur.findOne({ email });
};
