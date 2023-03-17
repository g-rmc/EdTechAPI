import express from 'express';
import cors from 'cors';
//import coasterRouter from './routers/coaster.router.js';

const app = express();

app
    .use(cors())
    .use(express.json())
    .get('/status', (req, res) => res.send('Ok!'))
    .get('/hello', (req, res) => res.send('Hello!'))
    //.use('/class', classesRouter)
    //.use('/teacher', teachersRouter)
    //.use('/student', classesRouter);

export default app;