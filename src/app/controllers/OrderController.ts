import { Request, Response } from 'express';

import { OrderRepository } from '../repositories/OrderRepository';
import { io } from '../..';

async function index(req: Request, res: Response) {
    const orders = await OrderRepository.list();

    res.json(orders);
}

async function create(req: Request, res: Response) {
    const { table, products } = req.body;

    const order = await OrderRepository.create({ table, products });

    const orderDetails = await order.populate('products.product');

    io.emit('orders@new', orderDetails);

    res.status(201).send(order);
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
