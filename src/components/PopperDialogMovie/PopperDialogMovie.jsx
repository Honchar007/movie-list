import { createPortal } from 'react-dom';

// store
import { useGetMovieQuery } from '../../store/movies.api';

// components
import PopperDialog from '../PopperDialog';

// styles
import './PopperDialogMovie.scss';

// assets
import closeIcn from '../../assets/imgs/close.svg';

function PopperDialogMovie({
  setIsOpen,
  referenceElem,
  id,
  favoriteMark,
  changeFavoriteList,
}) {
  const { data, isFetching } = useGetMovieQuery({
    id,
  });

  // popper
  const close = () => {
    setIsOpen(false);
  };

  return createPortal(
    <div className="screen-modal">
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <PopperDialog
          position="bottom"
          onBlur={close}
          referenceElem={referenceElem.current}
          centered
        >
          <div className="movie">
            <div className="main-info">
              <div className="movie-img">
                <img src={data.img} />
              </div>
              <div className="movie-year">
                <button
                  onClick={changeFavoriteList}
                  className={`icon ${favoriteMark ? 'favorite' : ''}`}
                />
                <div>{data.year}</div>
              </div>
              <div className="movie-genres">
                {data &&
                  data.genres.map((genre) => (
                    <div key={genre} className="movie-genre">
                      {genre}
                    </div>
                  ))}
              </div>
            </div>
            <div className="additional-info">
              <h1 className="title">{data.name}</h1>
              <div className="description">{data.description}</div>
              <div className="director">Director: {data.director}</div>
              <div className="starring">
                Starring: {data && data.starring.join(', ')}
              </div>
            </div>
            <div className="close" onClick={close}>
              <img src={closeIcn} alt="close" />
            </div>
          </div>
        </PopperDialog>
      )}
    </div>,
    document.body
  );
}

export default PopperDialogMovie;
