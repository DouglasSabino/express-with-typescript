import express from 'express';
import productRouter from './routers/products';
import dotenv from 'dotenv';
import handlerError from './middlewares/handlerError';

dotenv.config();
const api = express();
api.use(express.json());

const { PORT } = process.env;

api.use('/products', productRouter);

api.use(handlerError);

api.listen(PORT, () => console.log(`Running on port ${PORT}`));
