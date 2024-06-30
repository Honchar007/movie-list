import { configureStore } from '@reduxjs/toolkit';

// apis
import { moviesApi } from './movies.api';

// store
import favoritesSlicer from './favoritesSlicer';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    favorites: favoritesSlicer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
