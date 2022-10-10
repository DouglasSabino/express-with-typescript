import modelProduct from '../models/products';
import IProduct from '../interfaces/IProduct';

class serviceProduct {
  public model = new modelProduct();
  async listAll(): Promise<IProduct[]> {
    const products: IProduct[] = await this.model.listAll();
    return products;
  }

  async listById(id: number): Promise<IProduct[]> {
    const products: IProduct[] = await this.model.listById(id);
    return products;
  }

  async addProduct(data: IProduct) {
    const product = await this.model.addProduct(data);
    return product;
  }
}

export default serviceProduct;