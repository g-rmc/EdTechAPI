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

function findClassSubjectById(classId, subjectId) {
    return prisma.classes_subjects.findFirst({
        where: {
            classId,
            subjectId
        }
    })
}

function createClassSubjectById(classId, subjectId) {
    return prisma.classes_subjects.create({
        data: {
            classId,
            subjectId
        }
    })
}

export const classesRepository = {
    findClasses,
    findClassById,
    findClassByName,
    createClassByName,
    findClassSubjectById,
    createClassSubjectById
}