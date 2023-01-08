import React from 'react';

import { useGetPokemonListQuery } from 'api';
import { CardListComponent } from './CardList.component';
import { useAppSelector } from 'store/hooks';

export const CardList = () => {
  const { isSuccess } = useGetPokemonListQuery();

  const list = useAppSelector(
    ({ pokemonList: { currentPageList } }) => currentPageList,
  );

  if (!isSuccess) {
    return <main>Waiting</main>;
  }

  return (
    <main>
      <CardListComponent pokemonList={list} />
    </main>
  );
};