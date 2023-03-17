import { prisma } from '../database/database.js';

function findTeachers() {
    return prisma.teachers.findMany();
}

export const teachersRepository = {
    findTeachers,
}