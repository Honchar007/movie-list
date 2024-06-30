import { useDispatch } from 'react-redux';

// store
import { removeFavorite } from '../../store/favoritesSlicer';

// styles
import './FavoritesList.scss';

// assets
import close from '../../assets/imgs/close.svg';

function FavoritesList({ data }) {
  const dispatch = useDispatch();

  const remove = (movie) => {
    dispatch(removeFavorite(movie));
  };

  return (
    <div className="favorites">
      <h1 className="favorites-title">Favorite List</h1>
      <div className="favorites-list">
        {data &&
          data.map((movie, id) => (
            <div key={movie.id} className="favorite-movie">
              <div className="counter">{id + 1}</div>
              <div className="name">{movie.name}</div>
              <div className="close" onClick={() => remove(movie)}>
                <img src={close} alt="close" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FavoritesList;
