import Joi from "joi";

export const nameSchema = Joi.object({
    name: Joi.string().required(),
});

export const idSchema = Joi.object({
    id: Joi.number().min(1).required(),
});

export const classSubjectSchema = Joi.object({
    classId: Joi.number().min(1).required(),
    subjectId: Joi.number().min(1).required(),
});

export const studentSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    classId: Joi.number().min(1).required(),
});

export const teacherSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
});

export const teacherSubjectSchema = Joi.object({
    teacherId: Joi.number().min(1).required(),
    subjectId: Joi.number().min(1).required(),
});