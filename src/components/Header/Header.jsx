import React from 'react';

import styles from 'components/Header/Header.module.scss';
import Logo from 'components/Logo';
import Search from 'components/Search';

export const Header = () => (
  <div className={styles.container}>
    <header>
      <Logo />
      <Search />
    </header>
  </div>
);
