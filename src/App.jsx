import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// store
import { getFavorites, selectFavorites } from './store/favoritesSlicer';
import { useGetMoviesQuery } from './store/movies.api';

// components
import MovieList from './components/MovieList/MovieList';
import FavoritesList from './components/FavoritesList';

// styles
import './assets/styles/index.scss';

// assets
import cardView from './assets/imgs/card-view.svg';
import rowView from './assets/imgs/row-view.svg';

function App() {
  const dispatch = useDispatch();

  const { data } = useGetMoviesQuery();

  const favorites = useSelector(selectFavorites);

  const [genreSort, setGenreSort] = useState('');
  const [uniqueGenres, setUniqueGenres] = useState([]);
  const [view, setView] = useState('card');

  const movies = useMemo(() => {
    return genreSort !== ''
      ? data.filter((movie) =>
          movie.genres.some((genre) => genre === genreSort)
        )
      : data;
  }, [data, genreSort]);

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      const allGenres = data.flatMap((movie) => movie.genres);
      setUniqueGenres([...new Set(allGenres)]);
    }
  }, [data]);

  useEffect(() => {
    console.log(genreSort);
  }, [genreSort]);

  return (
    <div className="container">
      <div className="header">
        <h1 className="header-title">Movies Gallery</h1>
      </div>
      <div className="menu">
        <div className="main-view">
          view as
          <div className="icn-btn" onClick={() => setView('card')}>
            <img src={cardView} alt="card view" />
          </div>
          <div className="icn-btn" onClick={() => setView('row')}>
            <img src={rowView} alt="row view" />
          </div>
        </div>
        <div className="select genre">
          <span>Sort by genre: </span>
          <select name="select" onChange={(e) => setGenreSort(e.target.value)}>
            <option value=""></option>
            {uniqueGenres &&
              uniqueGenres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="main">
        <MovieList view={view} data={movies} favorites={favorites || []} />
        <FavoritesList data={favorites || []} />
      </div>
    </div>
  );
}

export default App;
