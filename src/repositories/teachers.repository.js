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

export const teachersRepository = {
    findTeachers,
    findTeacherById
}