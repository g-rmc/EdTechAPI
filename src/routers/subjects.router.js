import express from "express";

import { subjectsController } from "../controllers/index.js";
import { validateSchema } from '../middlewares/validateSchema.middleware.js';
import { nameSchema } from "../schemas/index.js";

const subjectsRouter = express.Router();

subjectsRouter
    .get('/', subjectsController.getSubjects)
    .post('/', validateSchema(nameSchema, 'body'), subjectsController.postNewSubject);

export { subjectsRouter };