import express from 'express';
import cors from 'cors';
import { classesRouter, studentsRouter, subjectsRouter, teachersRouter } from './routers/index.js';

const app = express();

app
    .use(cors())
    .use(express.json())
    .get('/status', (req, res) => res.send('Ok!'))
    .get('/hello', (req, res) => res.send('Hello!'))
    .use('/classes', classesRouter)
    .use('/students', studentsRouter)
    .use('/subjects', subjectsRouter)
    .use('/teachers', teachersRouter)

export default app;