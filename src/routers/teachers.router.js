import express from "express";

import { teachersController } from '../controllers/index.js';
import { validateSchema } from '../middlewares/validateSchema.middleware.js';
import { nameSchema, idSchema, teacherSubjectSchema } from "../schemas/index.js";

const teachersRouter = express.Router();

teachersRouter
    .get('/', teachersController.getTeachers)
    .get('/:id', validateSchema(idSchema, 'params'), (req, res) => {res.sendStatus(400)})
    .post('/', validateSchema(nameSchema, 'body'), (req, res) => {res.sendStatus(400)})
    .post('/subject', validateSchema(teacherSubjectSchema, 'body'), (req, res) => {res.sendStatus(400)})
    .delete('/:id', validateSchema(idSchema, 'params'), (req, res) => {res.sendStatus(400)});

export { teachersRouter };