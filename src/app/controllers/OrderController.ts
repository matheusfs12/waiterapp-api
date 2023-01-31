import { Request, Response } from 'express';

import { OrderRepository } from '../repositories/OrderRepository';

async function index(req: Request, res: Response) {
    const orders = await OrderRepository.list();

    res.json(orders);
}

async function create(req: Request, res: Response) {
    const { table, products } = req.body;

    const category = await OrderRepository.create({ table, products });

    res.status(201).send(category);
}

async function updateStatus(req: Request, res: Response) {
    const { orderId } = req.params;
    const { status } = req.body;

    await OrderRepository.updateStatus(orderId, status);

    res.sendStatus(204);
}

async function cancel(req: Request, res: Response) {
    const { orderId } = req.params;

    await OrderRepository.cancel(orderId);

    res.sendStatus(204);
}

export const OrderController = {
    index,
    create,
    updateStatus,
    cancel,
};
