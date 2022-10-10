import express, { Router } from 'express';
import ControllerProducts from '../controllers/products';
import handlerError from '../middlewares/handlerError';

const productRouter: Router = express.Router();

const controller = new ControllerProducts();

productRouter.get('/', controller.listAll);
productRouter.get('/:id', controller.listById)

productRouter.post('/', handlerError, controller.addProduct);

export default productRouter;