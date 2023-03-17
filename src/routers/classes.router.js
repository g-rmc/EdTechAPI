import express from "express";

import { validateSchema } from '../middlewares/validateSchema.middleware.js';
import { nameSchema, classSubjectSchema } from "../schemas/index.js";
import { classesController } from "../controllers/classes.controller.js";

const classesRouter = express.Router();

classesRouter
    .get('/', classesController.getClasses)
    .post('/', validateSchema(nameSchema, 'body'), classesController.postNewClass)
    .post('/subject', validateSchema(classSubjectSchema, 'body'), classesController.postClassSubject);

export { classesRouter };