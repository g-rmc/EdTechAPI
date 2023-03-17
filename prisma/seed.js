import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    cleanDb();

    const classA = await prisma.classes.create({
        data: {
            name: "Turma 8A"
        }
    });

    await prisma.students.createMany({
        data: [
            {
                name: "João",
                email: "joao@email.com",
                classId: classA.id
            }, 
            {
                name: "Maria",
                email: "maria@email.com",
                classId: classA.id
            }
        ]
    });

    const subjectI = await prisma.subjects.create({
        data: {
            name: "Matemática"
        }
    });
    const subjectII = await prisma.subjects.create({
        data: {
            name: "História"
        }
    });
    const subjectIII = await prisma.subjects.create({
        data: {
            name: "Biologia"
        }
    });

    await prisma.classes_subjects.createMany({
        data: [
            {
                classesId: classA.id,
                subjectId: subjectI
            },
            {
                classesId: classA.id,
                subjectId: subjectII
            },
        ]
    })

    const teacherI = await prisma.teachers.create({
        data: {
            name: "Sr Carlos",
            email: "profcarlos@email.com",
        }
    });
    const teacherII = await prisma.teachers.create({
        data: {
            name: "Sra Ana",
            email: "profana@email.com",
        }
    });

    await prisma.teachers_subjects.createMany({
        data: [
            {
                teacherId: teacherI.id,
                subjectId: subjectI.id
            },
            {
                teacherId: teacherII.id,
                subjectId: subjectII.id
            },
            {
                teacherId: teacherII.id,
                subjectId: subjectIII.id
            },
        ]
    })
}

async function cleanDb() {
    await prisma.classes.deleteMany({});
    await prisma.teachers.deleteMany({});
    await prisma.subjects.deleteMany({});
    await prisma.students.deleteMany({});
    await prisma.classes_subjects.deleteMany({});
    await prisma.teachers_subjects.deleteMany({});
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });