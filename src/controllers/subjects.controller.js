import { subjectsService } from "../services/index.js";

async function getSubjects(req, res) {
    try {
        const subjects = await subjectsService.getSubjectsList();
        res.send(subjects);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function postNewSubject(req, res) {
    const subjectName = req.body.name;

    try {
        await subjectsService.createNewUniqueSubject(subjectName);
        res.sendStatus(201);
    } catch (error) {
        if (error.message.includes('already exists')) return res.status(409).send(error.message);
        res.status(400).send(error.message);
    }
}

export const subjectsController = {
    getSubjects,
    postNewSubject
}