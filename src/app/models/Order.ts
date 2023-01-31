import { Schema, model } from 'mongoose';

export interface IOrder {
    table: string;
    status?: string;
    createdAt?: Date;
    products: [{
        product: string,
        quantity: number,
    }]
}

export const Order = model('Order',  new Schema<IOrder>({
    table: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['WAITING', 'IN_PRODUCTION', 'DONE', 'CANCELED'],
        default: 'WAITING',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    products: {
        required: true,
        type: [{
            product: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'Product',
            },
            quantity: {
                type: Number,
                default: 1,
            },
        }]
    }
}));
