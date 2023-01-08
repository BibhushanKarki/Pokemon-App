import React from 'react';
import styles from 'components/Card/Card.module.scss';
import CardImage from 'components/CardImage';

export const FlippingCard = ({ name, frontSprite, backSprite }) => (
  <li className={styles.flip}>
    <div className={styles.front}>
      <CardImage sprite={frontSprite} />
      <p className={styles.name}>{name}</p>
    </div>
    <div className={styles.back}>
      <CardImage sprite={backSprite} />
      <p className={styles.name}>{name}</p>
    </div>
  </li>
);
