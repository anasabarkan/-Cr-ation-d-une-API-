import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import destinationRoutes from './routes/destination_routes.js';
import voyageurRoutes from './routes/voyageur_routes.js';
import reservationRoutes from './routes/reservation_routes.js';


dotenv.config();
const app = express();
app.use(express.json());
// Routes
app.use('/api/destinations', destinationRoutes);
app.use('/api/voyageurs', voyageurRoutes);
app.use('/api/reservations', reservationRoutes);
// Connexion à MongoDB
const PORT = process.env.PORT || 3000;
console.log(PORT 
);

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB', err));


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
