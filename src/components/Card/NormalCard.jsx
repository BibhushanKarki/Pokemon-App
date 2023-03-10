import React from 'react';
import styles from './Card.module.scss';
import CardImage from '../CardImage';

export const NormalCard = ({ name }) => (
  <li className={styles.static}>
    <div className={styles.front}>
      <CardImage sprite={null} />
      <p className={styles.name}>{name}</p>
    </div>
  </li>
);