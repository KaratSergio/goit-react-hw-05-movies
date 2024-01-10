import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import DefaultImage from './DefaultImage/DefaultImage';
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
            {poster_path ? (
              <MoviePoster src={`${baseURL}${poster_path}`} alt={title} />
            ) : (
              <DefaultImage />
            )}
            <MovieTitle>{title}</MovieTitle>
          </MovieListLink>
        </MovieListItem>
      ))}
    </MovieListWrapper>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;
