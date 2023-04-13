import Home from '@/components/screens/home/Home';
import { IProductData } from '@/interfaces/product.inteface';
import { ProductService } from '@/services/product.service';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import React from 'react';

const HomePage: NextPage<IProductData> = ({ products }) => {
  return <Home products={products} />;
};
//ssg
export const getStaticProps: GetStaticProps<IProductData> = async () => {
  const data = await ProductService.getAllProduct();
  return {
    props: {
      products: data.products,
      limit: data.limit,
      skip: data.skip,
      total: data.total,
    },
    revalidate: 60,
  };
};

//ssr
// export const getServerSideProps: GetServerSideProps<IProductData> = async () => {
//   const products = await ProductService.getAllProduct();

//   return {
//     props: { products },
//   };
// };
export default HomePage;
