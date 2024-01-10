import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../../services/http-requests';

import Search from '../../components/Search/Search';
import MovieList from '../../components/MovieList/MovieList';

import { Container } from './Movies.styled'

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const movieSearch = searchParams.get('query') ?? '';

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: query });
    setQuery('');
  };

  useEffect(() => {
    if (!movieSearch) return;

    const fetchMovies = async () => {
      try {
        const { results } = await API.fetchData('search/movie', { query: movieSearch });

        setMovies(results);
      } catch (error) {
        console.error('Something went wrong, please try again', error);
      }
    };

    fetchMovies();
  }, [movieSearch]);

  return (
    <Container>
      <div>
      <Search value={query} onChange={handleChange} onSubmit={handleSubmit}>
          <label>
            Search:
            <input type="text" value={query} onChange={handleChange} />
          </label>
          <button type="submit">Search</button>
        </Search>
        <MovieList movies={movies} />
      </div>
    </Container>
  );
};

export default Movies;
