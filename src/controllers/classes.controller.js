import { classesService } from "../services/index.js";

async function getClasses(req, res) {
    try {
        const classes = await classesService.getClassesList();
        res.send(classes);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function postNewClass(req, res) {
    const className = req.body.name;

    try {
        await classesService.createNewUniqueClass(className);
        res.sendStatus(201);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function postClassSubject(req, res) {
    const classId = +req.body.classId;
    const subjectId = +req.body.subjectId;

    try {
        await classesService.createClassSubject(classId, subjectId);
        res.sendStatus(201);
    } catch (error) {
        if (error.message.includes('not found')) return res.status(404).send(error.message);
        res.status(400).send(error.message);
    }
}

export const classesController = {
    getClasses,
    postNewClass,
    postClassSubject
}