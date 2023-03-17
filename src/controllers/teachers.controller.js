import { teachersService } from "../services/index.js";

async function getTeachers(req, res) {
    try {
        const teachers = await teachersService.getTeachersList();
        res.send(teachers);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const teachersController = {
    getTeachers
}