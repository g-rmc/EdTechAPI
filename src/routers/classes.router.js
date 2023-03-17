import express from "express";

//import { myFunction } from '../controllers.js';

const classesRouter = express.Router();

classesRouter
    .get('/', (req, res) => {res.sendStatus(400)})
    .post('/', (req, res) => {res.sendStatus(400)})
    .post('/subject', (req, res) => {res.sendStatus(400)});

export { classesRouter };