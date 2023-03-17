import { teachersRepository, subjectsRepository } from "../repositories/index.js";

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

async function createNewTeacher(name, email) {
    const duplicatedEmail = await teachersRepository.findTeacherByEmail(email);
    if (duplicatedEmail) throw new Error('teacher email already exists');

    return await teachersRepository.createTeacher(name, email);
}

async function createTeacherSubject(teacherId, subjectId) {
    const validTeacherId = await teachersRepository.findTeacherById(teacherId);
    if (!validTeacherId) throw new Error('teacherId not found');

    const validSubjectId = await subjectsRepository.findSubjectById(subjectId);
    if (!validSubjectId) throw new Error('subjectId not found');

    const duplicatedTeacherSubject = await teachersRepository.findTeacherSubjectById(teacherId, subjectId);
    if (duplicatedTeacherSubject) throw new Error('teacherSubject already exists')

    return await teachersRepository.createTeacherSubjectById(teacherId, subjectId);
}

export const teachersService = {
    getTeachersList,
    getTeacherById,
    createNewTeacher,
    createTeacherSubject
}