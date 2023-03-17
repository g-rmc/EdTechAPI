import { classesRepository, studentsRepository } from "../repositories/index.js";

async function getStudentsList() {
    const studentsList = await studentsRepository.findStudents();
    return studentsList;
}

async function getStudentById(studentId) {
    const studentRaw = await studentsRepository.findStudentById(studentId);
    if (!studentRaw) throw new Error('studentId not found');

    const subjects = studentRaw.classes.classes_subjects.map((subject) => {
        return (
            {
                subjectId: subject.subjects.id,
                subjectName: subject.subjects.name,
                subjectTeacher: subject.subjects.teachers_subjects[0].teachers.name
            }
        )
    });

    const student = {
        id: studentRaw.id,
        name: studentRaw.name,
        email: studentRaw.email,
        class: {
            classId: studentRaw.classes.id,
            className: studentRaw.classes.name,
            subjects
        }
    };

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