import { prisma } from '../database/database.js';

function findClasses() {
    return prisma.classes.findMany();
}

function findClassById(id) {
    return prisma.classes.findUnique({
        where: {
            id
        }
    });
}

function findClassByName(name) {
    return prisma.classes.findUnique({
        where: {
            name
        }
    });
}

function createClassByName(name) {
    return prisma.classes.create({
        data: {
            name
        }
    });
}

export const classesRepository = {
    findClasses,
    findClassById,
    findClassByName,
    createClassByName,
}