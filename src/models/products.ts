import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/IProduct';
import db from "./connection";

interface IProductWithRow extends IProduct, RowDataPacket {};

class modelProduct {
  async listAll(): Promise<IProduct[]> {
    const SQL_GET_PRODUCTS = 'SELECT * FROM StoreManager.products';
    const [products] = await db.query<IProductWithRow[]>(SQL_GET_PRODUCTS);
    return products;
  }

  async listById(id: number): Promise<IProduct[]> {
    const SQL_GET_PRODUCT_BY_ID = 'SELECT * FROM StoreManager.products WHERE id=?';
    const [product] = await db.query<IProductWithRow[]>(SQL_GET_PRODUCT_BY_ID,[id]);
    return product;
  }

  async addProduct(data: IProduct): Promise<IProduct> {
    const SQL_POST_PRODUCT = 'INSERT INTO StoreManager.products (name) VALUES (?)';
    const [{ insertId }] = await db.query<ResultSetHeader>(SQL_POST_PRODUCT, [data.name]);
    return { id: insertId, name: data.name };
  }
}

export default modelProduct;
