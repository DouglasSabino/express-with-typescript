import express, { Router } from 'express';
import ControllerProducts from '../controllers/products';

const productRouter: Router = express.Router();

const controller = new ControllerProducts();

productRouter.get('/', controller.listAll);
productRouter.get('/:id', controller.listById)

export default productRouter;