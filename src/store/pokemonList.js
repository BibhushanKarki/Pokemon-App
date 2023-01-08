import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const calcCurrentPageList = (state) => {
  const { filteredList, pageNumber, pageSize } = state;
  const { length } = filteredList;

  const pageStart = pageNumber * pageSize;
  const pageEnd = Math.min(pageStart + pageSize, length);
  return filteredList.slice(pageStart, pageEnd);
};

const calcFilteredList = (state) => {
  const { fullList, searchValue } = state;

  return fullList.filter(({ name }) =>
    name.toLowerCase().includes(searchValue.toLowerCase()),
  );
};

const slice = createSlice({
  name: 'pokemonList',
  initialState,
  reducers: {
    setPokemonList: (state, { payload }) => {
      state.fullList = payload;
      state.filteredList = payload;
      state.currentPageList = calcCurrentPageList(state);
    },

    updateSearchValue: (state, { payload }) => {
      state.searchValue = payload;
      state.pageNumber = 0;
      state.filteredList = calcFilteredList(state);
      state.currentPageList = calcCurrentPageList(state);
    },

    nextPage: state => {
      const maxPageNumber = Math.ceil(state.filteredList.length / state.pageSize);

      if (state.pageNumber < maxPageNumber) {
        state.pageNumber += 1;
        state.currentPageList = calcCurrentPageList(state);
      }
    },

    previousPage: state => {
      if (state.pageNumber > 0) {
        state.pageNumber -= 1;
        state.currentPageList = calcCurrentPageList(state);
      }
    },
  },
});

export const { reducer: pokemonListReducer, actions: pokemonListActions } = slice;