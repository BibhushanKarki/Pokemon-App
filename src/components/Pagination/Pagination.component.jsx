import React, { memo } from 'react';

import styles from './Pagination.module.scss';


export const PaginationComponent = memo(
  ({ totalItemCount, currentPage, onNext, isLastPage, onPrevious }) => (
    <section className={styles.pagination}>
      <p>{totalItemCount} Pokemons</p>
      <div className={styles.controls}>
        <button disabled={!currentPage} onClick={onPrevious} type="button">
          &#60;
        </button>
        <p>{currentPage + 1}</p>
        <button disabled={isLastPage} onClick={onNext} type="button">
          &#62;
        </button>
      </div>
    </section>
  ),
);