import { subjectsRepository } from "../repositories/index.js";

async function getSubjectsList() {
    const subjectsList = await subjectsRepository.findSubjects();
    return subjectsList;
}

async function createNewUniqueSubject(subjectName) {
    const duplicatedSubject = await subjectsRepository.findSubjectByName(subjectName);
    if (duplicatedSubject) throw new Error('subjectName already exists');

    return await subjectsRepository.createSubjectByName(subjectName);
}

export const subjectsService = {
    getSubjectsList,
    createNewUniqueSubject
}