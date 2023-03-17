import express from 'express';
import cors from 'cors';
//import coasterRouter from './routers/coaster.router.js';

const app = express();

app
    .use(cors())
    .use(express.json())
    .get('/status', (_req, res) => res.send('Ok!'))
    .get('/hello', (_req, res) => res.send('Hello!'))
    //.use(coasterRouter);

export default app;