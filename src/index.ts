import { GlobalErrorHandler } from './app/middlewares/GlobalErrorHandler';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import { router } from './router';

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        console.log('✅ Connected to MongoDB');

        const app = express();

        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
        app.use(cors());
        app.use(express.json());

        app.use(router);

        app.use(GlobalErrorHandler.handler);

        app.listen(3001, () => {
            console.log('🚀 Server started on http://localhost:3001');
        });
    })
    .catch(err => console.error('🛑 Could not connect to MongoDB', err));
