import React, { FC } from 'react';
import './Home.module.scss';
import { IProductData, IProductDataArray } from '@/interfaces/product.inteface';
import Layout from '@/components/layout/layout';
import ProductItem from '@/components/UI/product/ProductItem';
import { IProduct } from '@/interfaces/product.inteface';
type HomeProps = {};

const Home: FC<IProductDataArray> = ({ products }) => {
  return (
    <Layout title="Home page" description="hi">
      <div>I am Home</div>

      {products?.length ? (
        products.map((product: IProduct) => <ProductItem key={product.id} product={product} />)
      ) : (
        <div>product not found!</div>
      )}
    </Layout>
  );
};

export default Home;
