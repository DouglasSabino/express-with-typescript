import Joi from 'joi';
import IProduct from '../interfaces/IProduct';

const validationProduct = async (body: IProduct) => {
  const schema = Joi.object({
    id: Joi.number(),
    name: Joi.string().min(3).required(),
  });
  await schema.validateAsync(body);
} 

export default validationProduct;