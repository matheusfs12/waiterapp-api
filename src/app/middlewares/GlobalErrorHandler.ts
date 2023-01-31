import { NextFunction, Request, Response } from 'express';

import { ValidationError } from 'express-validation';

function handler(error: Error, req: Request, res: Response, next: NextFunction) {
    if (error instanceof ValidationError) {
        return res.status(error.statusCode).json(error);
    }

    console.log(`🛑 Error: ${error}`);
    res.sendStatus(500);
}

export const GlobalErrorHandler = {
    handler
};
