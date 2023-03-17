import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await cleanDb();

    const classA = await prisma.classes.create({
        data: {
            name: "Turma 8A"
        }
    });

    console.log("class: ", classA);

    const students = await prisma.students.createMany({
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

    console.log("students: ", students);

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

    console.log("subjects: ", subjectI, subjectII, subjectIII);

    const classes_subjects = await prisma.classes_subjects.createMany({
        data: [
            {
                classesId: classA.id,
                subjectId: subjectI.id
            },
            {
                classesId: classA.id,
                subjectId: subjectII.id
            },
        ]
    });

    console.log("classes_subjects: ", classes_subjects);

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

    console.log("teachers: ", teacherI, teacherII);

    const teachers_subject = await prisma.teachers_subjects.createMany({
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
    });

    console.log("teachers_subject: ", teachers_subject);
}

async function cleanDb() {
    await prisma.classes_subjects.deleteMany({});
    await prisma.teachers_subjects.deleteMany({});
    await prisma.subjects.deleteMany({});
    await prisma.students.deleteMany({});
    await prisma.teachers.deleteMany({});
    await prisma.classes.deleteMany({});
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });