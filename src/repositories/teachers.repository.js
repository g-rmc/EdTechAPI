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

function removeTeacherById(id) {
    return prisma.teachers.delete({
        where: {
            id
        }
    });
}

export const teachersRepository = {
    findTeachers,
    findTeacherById,
    findTeacherByEmail,
    createTeacher,
    removeTeacherById
}