export interface IProduct {
  id: number;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}
export interface IProductData {
  products: IProduct[];
  limit: number;
  skip: number;
  total: number;
}
export interface IProductDataSingle {
  product: IProduct;
}
