import { teachersRepository } from "../repositories/index.js";

async function getTeachersList() {
    const teachersList = await teachersRepository.findTeachers();
    return teachersList;
}

export const teachersService = {
    getTeachersList
}