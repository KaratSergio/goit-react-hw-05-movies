import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const baseURL = 'https://image.tmdb.org/t/p/w200';

  return (
    <div className="movie-list-wrapp">
      {movies.map(({ title, id, poster_path }) => (
        <div key={id} className="movie-list-item">
          <a
            href={`/movies/${id}`}
            className="movie-list-link"
            state={{ from: location }}
          >
            <img
              src={poster_path ? `${baseURL}${poster_path}` : ''}
              alt={title}
              className="movie-poster"
            />
            <h2 className="movie-title">{title}</h2>
          </a>
        </div>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};

export default MovieList;
