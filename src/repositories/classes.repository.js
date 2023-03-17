//import { prisma } from '../database/database.js';

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
    createClassByName,
}