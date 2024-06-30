import { createSlice } from '@reduxjs/toolkit';

// services
import localStorageService from '../services/favorite.service';

const initialState = {
  movies: null,
};

const favoritesSlicer = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    getFavorites(state) {
      state.movies = localStorageService.getFavorites();
    },
    removeFavorite(state, action) {
      const movie = action.payload;
      const newMovies = localStorageService.removeFavorite(movie);
      state.movies = [...newMovies];
    },
    addFavorite(state, action) {
      const movie = action.payload;
      const newMovies = localStorageService.addFavorite(movie);
      state.movies = [...newMovies];
    },
  },
});

export const selectFavorites = (state) => state.favorites.movies;

export const { getFavorites, addFavorite, removeFavorite } =
  favoritesSlicer.actions;

export default favoritesSlicer.reducer;
