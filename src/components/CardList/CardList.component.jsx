import React from 'react';
import Card from '../Card'
import styles from './CardList.module.scss';
import Pagination from '../Pagination';

export const CardListComponent= ({ pokemonList }) => (
  <div className={styles.container}>
    <Pagination />
    <ul className={styles.list}>
      {pokemonList.map(({ name }) => (
        <Card key={name} name={name} />
      ))}
    </ul>
  </div>
);