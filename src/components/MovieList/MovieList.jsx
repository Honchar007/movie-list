// components
import Card from '../Card';

// styles
import './MovieList.scss';

function MovieList({ data, favorites, view }) {
  return (
    <div className={`card-list ${view === 'card' ? 'card-list' : 'row'}`}>
      {data &&
        data.map((movie) => (
          <Card
            key={movie.id}
            view={view}
            movie={movie}
            favoriteMark={
              Array.isArray(favorites) &&
              favorites.some((el) => el.id === movie.id)
            }
          />
        ))}
    </div>
  );
}

export default MovieList;
