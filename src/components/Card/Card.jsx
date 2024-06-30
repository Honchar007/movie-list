import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

// store
import { addFavorite, removeFavorite } from '../../store/favoritesSlicer';

// components
import PopperDialogMovie from '../PopperDialogMovie';

// styles
import './Card.scss';

const Card = ({ movie, favoriteMark, view }) => {
  const dispatch = useDispatch();

  const referenceElem = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const changeFavoriteList = (e) => {
    e.stopPropagation();

    favoriteMark
      ? dispatch(removeFavorite(movie))
      : dispatch(addFavorite(movie));
  };

  return (
    <>
      {view === 'card' ? (
        <div className="card" onClick={open} ref={referenceElem}>
          <div className="card-img">
            <img src={movie.img} alt={movie.name} />
            <div
              onClick={(e) => changeFavoriteList(e)}
              className={`favorite-btn ${favoriteMark ? 'icon favorite' : 'icon'}`}
            ></div>
          </div>
          <div className="card-info">
            <h2 className="card-name">{movie.name}</h2>
            <p className="card-year">{movie.year}</p>
          </div>
        </div>
      ) : (
        <div className="card-row" onClick={open} ref={referenceElem}>
          <div className="card-row-img">
            <img src={movie.img} alt={movie.name} />
          </div>
          <div className="card-row-info">
            <div className="card-row-title">
              <h2 className="card-row-name">
                {movie.name} {movie.year}
              </h2>
            </div>
            <p className="card-row-description">{movie.description}</p>
            <div className="movie-genres">
              {movie &&
                movie.genres.map((genre) => (
                  <div key={genre} className="movie-genre">
                    {genre}
                  </div>
                ))}
            </div>
          </div>
          <div
            onClick={(e) => changeFavoriteList(e)}
            className={`favorite-btn ${favoriteMark ? 'icon favorite' : 'icon'}`}
          ></div>
        </div>
      )}
      {isOpen && (
        <PopperDialogMovie
          referenceElem={referenceElem}
          setIsOpen={setIsOpen}
          id={movie.id}
          favoriteMark={favoriteMark}
          changeFavoriteList={changeFavoriteList}
        />
      )}
    </>
  );
};

export default Card;
