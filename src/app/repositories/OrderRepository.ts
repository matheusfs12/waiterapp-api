import { IOrder, Order } from '../models/Order';

function list() {
    return Order.find()
        .sort({ createdAt: 1 })
        .populate('products.product');
}

function create({ table, products }: IOrder) {
    return Order.create({ table, products });
}

function updateStatus(orderId: string, status: string) {
    return Order.findByIdAndUpdate(orderId, {
        status
    }, { new: true });
}

function cancel(orderId: string) {
    return updateStatus(orderId, 'CANCELED');
}

export const OrderRepository = {
    list,
    create,
    updateStatus,
    cancel
};
