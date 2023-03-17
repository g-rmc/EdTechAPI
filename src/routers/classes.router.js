import express from "express";

import { classesController } from "../controllers/index.js";
import { validateSchema } from '../middlewares/validateSchema.middleware.js';
import { nameSchema, classSubjectSchema } from "../schemas/index.js";

const classesRouter = express.Router();

classesRouter
    .get('/', classesController.getClasses)
    .post('/', validateSchema(nameSchema, 'body'), classesController.postNewClass)
    .post('/subject', validateSchema(classSubjectSchema, 'body'), classesController.postClassSubject);

export { classesRouter };