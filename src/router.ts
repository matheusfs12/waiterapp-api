import multer, { diskStorage } from 'multer';

import { CategoryController } from './app/controllers/CategoryController';
import { CategoryValidator } from './app/middlewares/CategoryValidator';
import { OrderController } from './app/controllers/OrderController';
import { OrderValidator } from './app/middlewares/OrderValidator';
import { ProductController } from './app/controllers/ProductController';
import { ProductValidator } from './app/middlewares/ProductValidator';
import { Router } from 'express';
import path from 'node:path';

export const router = Router();

const upload = multer({
    storage: diskStorage({
        destination: (req, file, callback) => {
            callback(null, path.resolve(__dirname, '..', 'uploads'));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        },
    })
});

// List categories
router.get('/categories', CategoryController.index);

// Create category
router.post('/categories', CategoryValidator.create, CategoryController.create);

// List products
router.get('/products', ProductController.index);

// Create product
router.post('/products', upload.single('image'), ProductValidator.create, ProductController.create);

// Get products by category
router.get('/categories/:categoryId/products', ProductController.listByCategory);

// List orders
router.get('/orders', OrderController.index);

// Create order
router.post('/orders', OrderValidator.create, OrderController.create);

// Change order status
router.patch('/orders/:orderId', OrderValidator.updateStatus, OrderController.updateStatus);

// Cancel order
router.delete('/orders/:orderId', OrderController.cancel);
