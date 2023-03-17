import express from "express";

import { teachersController } from '../controllers/index.js';
import { validateSchema } from '../middlewares/validateSchema.middleware.js';
import { teacherSchema, idSchema, teacherSubjectSchema } from "../schemas/index.js";

const teachersRouter = express.Router();

teachersRouter
    .get('/', teachersController.getTeachers)
    .get('/:id', validateSchema(idSchema, 'params'), teachersController.getTeacherById)
    .post('/', validateSchema(teacherSchema, 'body'), teachersController.postNewTeacher)
    .post('/subject', validateSchema(teacherSubjectSchema, 'body'), teachersController.postTeacherSubject)
    .delete('/:id', validateSchema(idSchema, 'params'), teachersController.deleteTeacher);

export { teachersRouter };