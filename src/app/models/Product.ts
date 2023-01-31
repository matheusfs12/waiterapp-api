import { Schema, model } from 'mongoose';

import { ICategory } from './Category';

interface IIngredient {
    name: string;
    icon: string;
}

export interface IProduct {
    name: string;
    description: string;
    imagePath: string;
    price: number;
    ingredients: IIngredient[];
    category: ICategory
}

export const Product = model('Product',  new Schema<IProduct>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imagePath: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    ingredients: {
        type: [{
            name: {
                type: String,
                required: true,
            },
            icon: {
                type: String,
                required: true,
            }
        }],
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Category',
    }
}));
