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

export const teachersController = {
    getTeachers,
    getTeacherById
}