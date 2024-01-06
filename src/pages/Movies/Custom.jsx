import { useEffect, useState } from 'react';
import * as API from '../../services/http-requests';

export const useSearchMovies = (query) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { results } = await API.fetchData('search/movie', { params: { query } });
        setMovies(results);
      } catch (error) {
        console.error('Something went wrong, please try again', error);
      }
    };

    fetchMovies();
  }, [query]);

  return movies;
};

