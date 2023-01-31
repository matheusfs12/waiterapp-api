import { Category, ICategory } from '../models/Category';

async function listCategories() {
    return await Category.find();
}

async function createCategory({ name, icon }: ICategory) {
    return await Category.create({ name, icon });
}

export const CategoryRepository = {
    listCategories,
    createCategory
};
