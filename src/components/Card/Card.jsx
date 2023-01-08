import React from 'react';

import { FlipCard } from './FlipCard';
import { LoadingCard } from './LoadingCard';
import { NormalCard } from './NormalCard';

import { useGetPokemonByNameQuery } from 'api';


export const Card = ({ name }) => {
  const { data: pokemon, isLoading } = useGetPokemonByNameQuery(name);

  if (isLoading) {
    return <LoadingCard />;
  }

  const { sprites } = pokemon;
  const cardName = pokemon?.name.split('-').join(' ');

  if (!sprites.front_default) {
    return <NormalCard name={cardName} />;
  }

  return (
    <FlipCard
      name={cardName}
      frontSprite={sprites.front_default}
      backSprite={sprites.back_default}
    />
  );
};
