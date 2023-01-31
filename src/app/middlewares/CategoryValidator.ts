import { Joi, validate } from 'express-validation';

const createBody = {
    body: Joi.object({
        name: Joi.string().required(),
        icon: Joi.string().required(),
    })
};

export const CategoryValidator = {
    create: validate(createBody)
};
