import React, { FC, PropsWithChildren } from 'react';
import { Imeta } from './meta.interface';
import Head from 'next/head';

const getTitle = (title: string) => `${title} | RED cars`;

const Meta: FC<PropsWithChildren<Imeta>> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description ? (
          <>
            <meta name="desctiption" content={description} />
            <meta name="og:title" content={getTitle(title)} />
            <meta name="og:desctiption" content={description} />
          </>
        ) : (
          <>
            <meta name="robots" content="noindex, nofollow" />
          </>
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;
