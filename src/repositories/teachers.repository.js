import { prisma } from '../database/database.js';

function findTeachers() {
    return prisma.teachers.findMany();
}

function findTeacherById(id) {
    return prisma.teachers.findUnique({
        where: {
            id
        },
        include: {
            teachers_subjects: {
                include: {
                    subjects: true
                }
            }
        }
    });
}

function findTeacherByEmail(email) {
    return prisma.teachers.findUnique({
        where: {
            email
        }
    });
}

function createTeacher(name, email) {
    return prisma.teachers.create({
        data: {
            name,
            email
        }
    });
}

function findTeacherSubjectById(teacherId, subjectId) {
    return prisma.teachers_subjects.findFirst({
        where: {
            teacherId,
            subjectId
        }
    })
}

function createTeacherSubjectById(teacherId, subjectId) {
    return prisma.teachers_subjects.create({
        data: {
            teacherId,
            subjectId
        }
    })
}

function removeTeacherById(id) {
    return prisma.teachers.delete({
        where: {
            id
        }
    });
}

function removeTeacherSubjectByTeacherId(teacherId) {
    return prisma.teachers_subjects.deleteMany({
        where: {
            teacherId
        }
    })
}

export const teachersRepository = {
    findTeachers,
    findTeacherById,
    findTeacherByEmail,
    createTeacher,
    findTeacherSubjectById,
    createTeacherSubjectById,
    removeTeacherById,
    removeTeacherSubjectByTeacherId
}