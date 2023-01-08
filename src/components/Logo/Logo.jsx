import React from 'react';
import {Typography} from '@mui/material';
import pokeball from '../../assets/pokeball.svg';
import style from './Logo.module.scss';

export const Logo = () => (
  <div className={style.logo}>
    <img src={pokeball} alt="pokeball" />
    <Typography variant="h1">Pokemon App</Typography>
  </div>
);