import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import DbConfig from './config/DbConfig.mjs';
import 'dotenv/config'
import userRoute from './routes/userRoute.mjs';

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRoute);


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})
