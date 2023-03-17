import { teachersService } from "../services/index.js";

async function getTeachers(req, res) {
    try {
        const teachers = await teachersService.getTeachersList();
        res.send(teachers);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function getTeacherById(req, res) {
    const teacherId = +req.params.id;

    try {
        const teacher = await teachersService.getTeacherById(teacherId);
        res.send(teacher);
    } catch (error) {
        if (error.message.includes('not found')) return res.status(404).send(error.message);
        res.status(400).send(error.message);
    }
}

async function postNewTeacher(req, res) {
    const {name, email} = req.body;

    try {
        await teachersService.createNewTeacher(name, email);
        res.sendStatus(201);
    } catch (error) {
        if (error.message.includes('already exists')) return res.status(409).send(error.message);
        res.status(400).send(error.message);
    }
}

async function postTeacherSubject(req, res) {
    const teacherId = +req.body.teacherId;
    const subjectId = +req.body.subjectId;

    try {
        await teachersService.createTeacherSubject(teacherId, subjectId);
        res.sendStatus(201);
    } catch (error) {
        if (error.message.includes('already exists')) return res.status(409).send(error.message);
        if (error.message.includes('not found')) return res.status(404).send(error.message);
        res.status(400).send(error.message);
    }
}

async function deleteTeacher(req, res) {
    const teacherId = +req.params.id;

    try {
        await teachersService.deleteTeacherById(teacherId);
        res.sendStatus(204);
    } catch (error) {
        if (error.message.includes('not found')) return res.status(404).send(error.message);
        res.status(400).send(error.message);
    }
}

export const teachersController = {
    getTeachers,
    getTeacherById,
    postNewTeacher,
    postTeacherSubject,
    deleteTeacher

}