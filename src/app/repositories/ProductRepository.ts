import { IProduct, Product } from '../models/Product';

async function list() {
    return await Product.find();
}

async function create(product: IProduct) {
    return await Product.create(product);
}

async function listByCategory(categoryId: string) {
    return await Product.find({ category: categoryId });
}

export const ProductRepository = {
    list,
    create,
    listByCategory,
};
