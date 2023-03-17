import express from "express";

import { studentsController } from "../controllers/index.js";
import { validateSchema } from '../middlewares/validateSchema.middleware.js';
import { idSchema, studentSchema } from "../schemas/index.js";

const studentsRouter = express.Router();

studentsRouter
    .get('/', studentsController.getStudents)
    .get('/:id', validateSchema(idSchema, 'params'), studentsController.getStudentById)
    .post('/', validateSchema(studentSchema, 'body'), studentsController.postNewStudent)
    .delete('/:id', validateSchema(idSchema, 'params'), studentsController.deleteStudent);

export { studentsRouter };