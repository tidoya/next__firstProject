import ProductItem from '@/components/UI/product/ProductItem';
import Layout from '@/components/layout/layout';
import { IProductDataSingle } from '@/interfaces/product.inteface';
import React, { FC } from 'react';

const ProductDetail: FC<IProductDataSingle> = ({ product }) => {
  return (
    <Layout title={product.title} description="Hello">
      <ProductItem product={product} />
    </Layout>
  );
};

export default ProductDetail;
