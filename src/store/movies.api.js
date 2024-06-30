import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_API_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `/list`,
    }),
    getMovie: builder.query({
      query: ({ id }) => `/list/${id}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = moviesApi;
