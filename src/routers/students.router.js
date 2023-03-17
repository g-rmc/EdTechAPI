import express from "express";

//import { myFunction } from '../controllers.js';

const studentsRouter = express.Router();

studentsRouter
    .get('/', (req, res) => {res.sendStatus(400)})
    .get('/:ID', (req, res) => {res.sendStatus(400)})
    .post('/', (req, res) => {res.sendStatus(400)})
    .delete('/:ID', (req, res) => {res.sendStatus(400)});

export { studentsRouter };