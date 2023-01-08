import { pokemonListActions } from '../pokemonList';

import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

const { updateSearchValue } = pokemonListActions;

export const useSearch = () => {
  const value = useAppSelector(({ pokemonList: { searchValue } }) => searchValue);

  const dispatch = useAppDispatch();

  const setValue = (newValue) => {
    dispatch(updateSearchValue(newValue));
  };

  return [value, setValue];
};