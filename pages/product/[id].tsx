import ProductDetail from '@/components/screens/ProductDetail/ProductDetail';
import Home from '@/components/screens/home/Home';
import { IProductData, IProductDataSingle } from '@/interfaces/product.inteface';
import { ProductService } from '@/services/product.service';
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

const ProductDetailPage: NextPage<IProductDataSingle> = ({ product }) => {
  return <ProductDetail product={product} />;
};
interface Params extends ParsedUrlQuery {
  id: string;
}
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await ProductService.getAllProduct();
  return {
    paths: data.products.map((product) => ({
      params: {
        id: product.id.toString(),
      },
    })),
    fallback: 'blocking',
  };
};
//ssg
export const getStaticProps: GetStaticProps<IProductDataSingle> = async ({ params }) => {
  const product = await ProductService.getByIdProduct(String(params?.id));
  return {
    props: {
      product,
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
export default ProductDetailPage;
