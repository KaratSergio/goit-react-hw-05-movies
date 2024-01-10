import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MovieListWrapper,
  MovieListItem,
  MoviePoster,
  MovieTitle,
  MovieListLink,
} from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  const baseURL = 'https://image.tmdb.org/t/p/w200';

  return (
    <MovieListWrapper>
      {movies.map(({ title, id, poster_path }) => (
        <MovieListItem key={id}>
          <MovieListLink to={`/movies/${id}`} state={{ from: location }}>
            <MoviePoster
              src={poster_path ? `${baseURL}${poster_path}` : ''}
              alt={title}
            />
            <MovieTitle>{title}</MovieTitle>
          </MovieListLink>
        </MovieListItem>
      ))}
    </MovieListWrapper>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
