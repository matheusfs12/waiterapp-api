import { Request, Response } from 'express';

import { ProductRepository } from '../repositories/ProductRepository';

async function index(req: Request, res: Response) {
    const products = await ProductRepository.list();

    res.json(products);
}

async function create(req: Request, res: Response) {
    const imagePath = req.file?.filename || '';

    const { name, price, description, category, ingredients } = req.body;

    const product = await ProductRepository.create({
        name,
        price: Number(price),
        description,
        category,
        ingredients: ingredients ? JSON.parse(ingredients) : [],
        imagePath,
    });

    res.status(201).json(product);
}

async function listByCategory(req: Request, res: Response) {
    const { categoryId } = req.params;

    const products = await ProductRepository.listByCategory(categoryId);

    res.json(products);
}


export const ProductController = {
    index,
    create,
    listByCategory,
};
