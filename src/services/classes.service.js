import { classesRepository } from "../repositories/index.js";

async function getClassesList() {
    const classesList = await classesRepository.findClasses();
    return classesList;
}

export const classesService = {
    getClassesList
}