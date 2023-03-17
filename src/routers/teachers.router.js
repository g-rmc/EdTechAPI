import express from "express";

//import { myFunction } from '../controllers.js';

const teachersRouter = express.Router();

teachersRouter
    .get('/', (req, res) => {res.sendStatus(400)})
    .get('/:ID', (req, res) => {res.sendStatus(400)})
    .post('/', (req, res) => {res.sendStatus(400)})
    .post('/subject', (req, res) => {res.sendStatus(400)})
    .delete('/:ID', (req, res) => {res.sendStatus(400)});

export { teachersRouter };