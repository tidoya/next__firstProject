import { IProductDataSingle } from '@/interfaces/product.inteface';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import styles from './ProductItem.module.scss';

const ProductItem: FC<IProductDataSingle> = ({ product }) => {
  return (
    <div className={styles.items}>
      <Image src={product.images[0]} alt={product.title} width={400} height={400} />
      <h2>{product.title}</h2>
      <small>{product.price}</small>

      <Link href={`/product/${product.id}`}>Read more</Link>
    </div>
  );
};

export default ProductItem;
