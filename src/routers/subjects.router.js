import express from "express";

//import { myFunction } from '../controllers.js';

const subjectsRouter = express.Router();

subjectsRouter
    .get('/', (req, res) => {res.sendStatus(400)})
    .post('/', (req, res) => {res.sendStatus(400)});

export { subjectsRouter };