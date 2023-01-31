import { Joi, validate } from 'express-validation';

const validStatus = ['WAITING', 'IN_PRODUCTION', 'DONE', 'CANCELED'];

const changeStatusBody = {
    body: Joi.object({
        status: Joi.string().valid(...validStatus).required()
    })
};

const createBody = {
    body: Joi.object({
        table: Joi.string().required(),
        status: Joi.string().valid(...validStatus).default('WAITING'),
        products: Joi.array().items({
            product: Joi.string().required(),
            quantity: Joi.number().default(1),
        }).required(),
    })
};

export const OrderValidator = {
    create: validate(createBody),
    updateStatus: validate(changeStatusBody)
};
