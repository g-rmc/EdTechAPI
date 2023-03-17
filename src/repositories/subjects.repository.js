import { prisma } from '../database/database.js';

function findSubjects() {
    return prisma.subjects.findMany();
}

function findSubjectById(id) {
    return prisma.subjects.findUnique({
        where: {
            id
        }
    });
}

function findSubjectByName(name) {
    return prisma.subjects.findUnique({
        where: {
            name
        }
    });
}

function createSubjectByName(name) {
    return prisma.subjects.create({
        data: {
            name
        }
    });
}

export const subjectsRepository = {
    findSubjects,
    findSubjectById,
    findSubjectByName,
    createSubjectByName
}