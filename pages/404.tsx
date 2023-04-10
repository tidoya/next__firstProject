import React from 'react';
import NotFoundImage from '../public/NotFound.webp';
import { NextPage } from 'next';
import Image from 'next/image';
import Layout from '@/components/layout/layout';
import Head from 'next/head';
const NotFound: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Not found</title>
      </Head>
      <div
        style={{
          textAlign: 'center',
        }}>
        <Image src="/NotFound.webp" alt="hi" width={800} height={766}></Image>
      </div>
    </Layout>
  );
};

export default NotFound;
