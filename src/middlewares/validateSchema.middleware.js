export function validateSchema(schema, type = 'body') {
    return (req, res, next) => {
        if(!req[type]) return res.status(400).send({ error: type+' empty' });

        const { error } = schema.validate(req[type], { abortEarly: false });
        if(!error) {
            next();
        } else {
            res.status(400).send(error.details.map(d => d.message));
        }
    };
}