import serviceProduct from '../services/products';
import { Request, Response } from 'express';
import HTTP_CODE from '../util.ts/HTTP_CODES';

const service = new serviceProduct();

class ControllerProducts {
    async listAll(_req: Request , res: Response) {
      const products = await service.listAll();
      return res.status(HTTP_CODE.OK).json(products);
    }

    async listById(req: Request , res: Response) {
        const { id } = req.params;
        const product = await service.listById(Number(id));
        return res.status(HTTP_CODE.OK).json(product);
    }
    
}

export default ControllerProducts;
