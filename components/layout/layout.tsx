import React, { FC, PropsWithChildren } from 'react';
import Header from './header/Header';
import { Imeta } from '../seo/meta.interface';
import Meta from '../seo/Meta';
import dynamic from 'next/dynamic';
import Footer from './Footer';

const DynamicFooter = dynamic(() => import('./Footer'), {
  ssr: false,
});

const Layout: FC<PropsWithChildren<Imeta>> = ({ children, title, description }) => {
  return (
    <Meta title={title} description={description}>
      <Header />
      {children}
      <DynamicFooter />
    </Meta>
  );
};

export default Layout;
