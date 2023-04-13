import { IProduct, IProductData } from '@/interfaces/product.inteface';
import axios from 'axios';

const API_URL = 'https://dummyjson.com';
axios.defaults.baseURL = API_URL;
export const ProductService = {
  async getAllProduct() {
    const { data } = await axios.get<IProductData>('/products');
    return data;
  },
  async getByIdProduct(id: string) {
    const { data } = await axios.get<IProduct>(`/products/${id}`);
    return data;
  },
};
