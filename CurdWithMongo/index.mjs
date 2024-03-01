import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import DbConfig from './config/DbConfig.mjs';
import 'dotenv/config'
import userRoute from './routes/userRoute.mjs';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRoute);

const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, 'web/dist')))

app.get(('/'), express.static(path.join(__dirname, 'web/dist')))

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'web/dist/index.html'));
});


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})
