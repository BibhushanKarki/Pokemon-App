import React from 'react';

import pokeball from 'assets/pokeball.svg';
import style from 'components/Logo/Logo.module.scss';

export const Logo = () => (
  <div className={style.logo}>
    <img src={pokeball} alt="pokeball" />
    <Typography variant="h1">Pokemon</Typography>
  </div>
);