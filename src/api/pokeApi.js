import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { pokemonListActions } from '../store/pokemonList';


const fetchImage = async (url) => {
  const res = await fetch(url);
  const blob = await res.blob();

  const reader = new FileReader();
  reader.readAsDataURL(blob);

  return new Promise<string>(resolve => {
    reader.onloadend = () => {
      resolve(reader.result);
    };
  });
};

export const pokeApi = createApi({
  reducerPath: 'pokeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/pokemon' }),
  endpoints: builder => ({
    getPokemonList: builder.query({
      query: () => `/?limit=500`,
      async onQueryStarted(arg, api) {
        await api.queryFulfilled;
        const pokemonList = api.getCacheEntry().data?.results;

        if (pokemonList && pokemonList.length)
          api.dispatch(pokemonListActions.setPokemonList(pokemonList));
      },
    }),
    getPokemonByName: builder.query({
      query: name => `/${name}`,
      transformResponse: async (details) => {
        const frontImgUrl = details.sprites.front_default;
        const backImgUrl = details.sprites.back_default;

        if (!frontImgUrl && !backImgUrl) {
          return details;
        }

        const frontSideImage = await fetchImage(frontImgUrl);
        const backSideImage = backImgUrl ? await fetchImage(backImgUrl) : frontSideImage;

        return {
          ...details,
          sprites: {
            ...details.sprites,
            front_default: frontSideImage,
            back_default: backSideImage,
          },
        };
      },
    }),
  }),
});