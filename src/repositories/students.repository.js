import { prisma } from '../database/database.js';

function findStudents() {
    return prisma.students.findMany({
        include: {
            classes: true
        }
    });
}

function findStudentById(id) {
    return prisma.students.findUnique({
        where: {
            id
        },
        include: {
            classes: {
                include: {
                    classes_subjects: {
                        include: {
                            subjects: {
                                include: {
                                    teachers_subjects: {
                                        include: {
                                            teachers: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });
}

function findStudentByEmail(email) {
    return prisma.students.findUnique({
        where: {
            email
        }
    });
}

function createStudent(name, email, classId) {
    return prisma.students.create({
        data: {
            name,
            email,
            classId
        }
    });
}

function removeStudentById(id) {
    return prisma.students.delete({
        where: {
            id
        }
    });
}

export const studentsRepository = {
    findStudents,
    findStudentById,
    findStudentByEmail,
    createStudent,
    removeStudentById
}