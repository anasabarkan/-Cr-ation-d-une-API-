import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination', required: true },
    voyageurId: { type: mongoose.Schema.Types.ObjectId, ref: 'Voyageur', required: true },
    dateDebut: { type: Date, required: true },
    dateFin: { type: Date, required: true },
    nombrePersonnes: { type: Number, required: true },
    prixTotal: { type: Number }
});

reservationSchema.pre('save', async function (next) {
    const destination = await mongoose.model('Destination').findById(this.destinationId);
    if (destination) {
        const duration = Math.ceil((this.dateFin - this.dateDebut) / (1000 * 60 * 60 * 24));
        this.prixTotal = duration * destination.prixParNuit;
    }
    next();
});

export default mongoose.model('Reservation', reservationSchema);
