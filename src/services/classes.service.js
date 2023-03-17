import { classesRepository } from "../repositories/index.js";

async function getClassesList() {
    const classesList = await classesRepository.findClasses();
    return classesList;
}

async function createNewUniqueClass(className) {
    const duplicatedClass = await classesRepository.findClassByName(className);
    if (duplicatedClass) throw new Error('className already exists');

    return await classesRepository.createClassByName(className);
}

export const classesService = {
    getClassesList,
    createNewUniqueClass,
}