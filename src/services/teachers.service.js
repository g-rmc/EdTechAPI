import { teachersRepository } from "../repositories/index.js";

async function getTeachersList() {
    const teachersList = await teachersRepository.findTeachers();
    return teachersList;
}

async function getTeacherById(teacherId) {
    const teacherRaw = await teachersRepository.findTeacherById(teacherId);
    if (!teacherRaw) throw new Error('teacherId not found');

    const subjects = teacherRaw.teachers_subjects.map(subject => {
        return ({
            subjectId: subject.subjects.id,
            subjectName: subject.subjects.name
        })
    });

    const teacher = {
        id: teacherRaw.id,
        name: teacherRaw.name,
        email: teacherRaw.email,
        subjects
    };

    return teacher;
}

export const teachersService = {
    getTeachersList,
    getTeacherById
}