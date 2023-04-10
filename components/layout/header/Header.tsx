import Link from 'next/link';
import React, { FC } from 'react';
import styles from './Header.module.scss';
type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
  return (
    <div className={styles.header}>
      <Link href="/">Home</Link>
      <Link href="/about-us">About</Link>
    </div>
  );
};

export default Header;
