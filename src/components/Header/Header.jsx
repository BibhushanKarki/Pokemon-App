import React from 'react';

import styles from './Header.module.scss';
import Logo from '../Logo';
import Search from '../Search';

export const Header = () => (
  <div className={styles.container}>
      <Logo />
      <Search />
  </div>
);

