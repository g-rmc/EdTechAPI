import { classesRepository, subjectsRepository } from "../repositories/index.js";

async function getClassesList() {
    const classesList = await classesRepository.findClasses();
    return classesList;
}

async function createNewUniqueClass(className) {
    const duplicatedClass = await classesRepository.findClassByName(className);
    if (duplicatedClass) throw new Error('className already exists');

    return await classesRepository.createClassByName(className);
}

async function createClassSubject(classId, subjectId) {
    const validClassId = await classesRepository.findClassById(classId);
    if (!validClassId) throw new Error('classId not found');

    const validSubjectId = await subjectsRepository.findSubjectById(subjectId);
    if (!validSubjectId) throw new Error('subjectId not found');

    const duplicatedClassSubject = await classesRepository.findClassSubjectById(classId, subjectId);
    if (duplicatedClassSubject) throw new Error('classSubject already exists')

    return await classesRepository.createClassSubjectById(classId, subjectId);
}

export const classesService = {
    getClassesList,
    createNewUniqueClass,
    createClassSubject
}