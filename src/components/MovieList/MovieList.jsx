import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MovieListWrapper,
  MovieListItem,
  MoviePoster,
  MovieTitle,
} from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  const baseURL = 'https://image.tmdb.org/t/p/w200';

  return (
    <MovieListWrapper>
      {movies.map(({ title, id, poster_path }) => (
        <MovieListItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <MoviePoster
              src={poster_path ? `${baseURL}${poster_path}` : ''}
              alt={title}
            />
            <MovieTitle>{title}</MovieTitle>
          </Link>
        </MovieListItem>
      ))}
    </MovieListWrapper>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
