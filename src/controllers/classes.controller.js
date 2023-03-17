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

    res.sendStatus(400);
}

async function postClassSubject(req, res) {
    const classId = +req.body.classId;
    const subjectId = +req.body.subjectId;

    res.sendStatus(400);
}

export const classesController = {
    getClasses,
    postNewClass,
    postClassSubject
}