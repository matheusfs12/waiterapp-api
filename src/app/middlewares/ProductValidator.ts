import { Joi, validate } from 'express-validation';

const createBody = {
    body: Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        imagePath: Joi.string().required(),
        price: Joi.number().required(),
        ingredients: Joi.array().items({
            name: Joi.string().required(),
            icon: Joi.string().required(),
        }).required(),
        category: Joi.string().required(),
    })
};

export const ProductValidator = {
    create: validate(createBody)
};
