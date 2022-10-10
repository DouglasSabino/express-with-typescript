import serviceProduct from '../services/products';
import { NextFunction, Request, Response } from 'express';
import HTTP_CODE from '../util.ts/HTTP_CODES';
import IProduct from '../interfaces/IProduct';
import joiValidation from '../util.ts/joiValidation';

const service = new serviceProduct();

class ControllerProducts {
    async listAll(_req: Request , res: Response, next: NextFunction) {
      try {
        const products = await service.listAll();
        return res.status(HTTP_CODE.OK).json(products);
      } catch (error) {
        next(error)
      }
    }

    async listById(req: Request , res: Response, next: NextFunction) {
      try {
        const { id } = req.params;
        const product = await service.listById(Number(id));
        return res.status(HTTP_CODE.OK).json(product);
      } catch (error) {
        next(error)
      }
    }
    
    async addProduct(req: Request<unknown, unknown, IProduct> , res: Response, next: NextFunction) {
      try {
        const body = req.body;
        await joiValidation(body);
        const product = await service.addProduct(body);
        return res.status(HTTP_CODE.CREATED).json(product);
      } catch (error) {
        next(error)
      }
    }
}

export default ControllerProducts;

