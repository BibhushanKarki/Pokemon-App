import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import pokeApi from '../api';
import { pokemonListReducer } from './pokemonList';

const store = configureStore({
  reducer: {
    [pokeApi.reducerPath]: pokeApi.reducer,
    pokemonList: pokemonListReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(pokeApi.middleware),
});

setupListeners(store.dispatch);

export { store };