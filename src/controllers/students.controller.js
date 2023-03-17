//import { studentsService } from "../services/index.js";
const studentsService = {}

async function getStudents(req, res) {
    try {
        const students = await classesService.getStudentsList();
        res.send(students);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function getStudentById(req, res) {
    const studentId = req.params.id;

    try {
        const student = await classesService.getStudentById(studentId);
        res.send(student);
    } catch (error) {
        if (error.message.includes('not found')) return res.status(404).send(error.message);
        res.status(400).send(error.message);
    }
}

async function postNewStudent(req, res) {
    const className = req.body.name;

    try {
        await classesService.createNewUniqueClass(className);
        res.sendStatus(201);
    } catch (error) {
        if (error.message.includes('already exists')) return res.status(409).send(error.message);
        res.status(400).send(error.message);
    }
}

async function deleteStudent(req, res) {
    const studentId = req.params.id;

    try {
        await classesService.deleteStudentById(studentId);
        res.sendStatus(204);
    } catch (error) {
        if (error.message.includes('not found')) return res.status(404).send(error.message);
        res.status(400).send(error.message);
    }
}

export const studentsController = {
    getStudents,
    getStudentById,
    postNewStudent,
    deleteStudent
}