import express from 'express';
import 'dotenv/config'
import DbConfig from './config/DbConfig.mjs'
import router from './routes/index.mjs';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';


const app = express();
const __dirname = path.resolve();

//Middlewares
app.use(express.json());
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))

app.use('/api/v1', router)

//Serving Front-End on Server
app.use(express.static(path.join(__dirname, 'web/dist')))
app.use(('/'), express.static(path.join(__dirname, 'web/dist')))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'web/dist/index.html'));
});



app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));