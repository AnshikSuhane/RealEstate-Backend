import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Welcome Route
app.get('/api', (req, res) => {
    res.send('Welcome to RealEState Server');
});

app.use('/api/user', userRoute);
app.use('/api/residency', residencyRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
