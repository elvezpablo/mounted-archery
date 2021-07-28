import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

// import fetch from 'isomorphic-fetch';
import { config } from 'dotenv';
import "./database/mongo/db";
import RidersApi from "./api/riders";

config();

const app = express();
app.use(helmet()); // sets various security headers 
app.use(express.json()); // parses incoming json request payloads
app.use(cors()); // allow cross origin requests


const PORT = process.env.PORT || 9001;
const PROD = process.env.NODE_ENV === 'production';

app.post('/', async (req, res) => {

    res.send(JSON.stringify({ method: "POST" }, null, 2));
})

app.get(`/`, async (req, res) => {
    res.send(JSON.stringify({ method: "GET" }, null, 2));
})

app.use('/api', RidersApi);

app.listen(PORT, () => {
    console.log('Server Started on PORT: ', PORT)
})
