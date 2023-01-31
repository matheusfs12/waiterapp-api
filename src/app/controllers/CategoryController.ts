import { Request, Response } from 'express';

import { CategoryRepository } from '../repositories/CategoryRepository';

async function index(req: Request, res: Response) {
    const categories = await CategoryRepository.listCategories();

    res.json(categories);
}

async function create(req: Request, res: Response) {
    const { name, icon } = req.body;

    const category = await CategoryRepository.createCategory({ name, icon });

    res.status(201).send(category);
}

export const CategoryController = {
    index,
    create,
};
