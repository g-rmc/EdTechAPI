import { classesRepository, studentsRepository } from "../repositories/index.js";

async function getStudentsList() {
    const studentsList = await studentsRepository.findStudents();
    return studentsList;
}

async function getStudentById(studentId) {
    const student = await studentsRepository.findStudentById(studentId);
    if (!student) throw new Error('studentId not found');

    return student;
}

async function createNewStudent(name, email, classId) {
    const duplicatedEmail = await studentsRepository.findStudentByEmail(email);
    if (duplicatedEmail) throw new Error('student email already exists');

    const validClassId = await classesRepository.findClassById(classId);
    if (!validClassId) throw new Error('classId not found');

    return await studentsRepository.createStudent(name, email, classId);
}

async function deleteStudentById(studentId) {
    const student = await studentsRepository.findStudentById(studentId);
    if (!student) throw new Error('studentId not found');

    return await studentsRepository.removeStudentById(studentId);
}

export const studentsService = {
    getStudentsList,
    getStudentById,
    createNewStudent,
    deleteStudentById
}