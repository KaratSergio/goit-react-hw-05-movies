import useSwr from 'swr';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '6167a2fbe619d64566c427d4bc6ed1cb';

const fetcher = async url => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed fetch data');
  }

  return response.json();
};

export const useTrendingMovies = () => {
  const { data, error } = useSwr(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    fetcher
  );

  if (error) {
    console.error('Error loading trending movies:', error);
  }

  return {
    trendingMovies: data?.results || [],
    isLoading: !error && !data,
    isError: error,
  };
};

export const useSearchMovies = query => {
  const { data, error } = useSwr(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
    fetcher
  );

  if (error) {
    console.error(`Error searching movies for query "${query}":`, error);
  }

  return {
    searchResults: data?.results || [],
    isLoading: !error && !data,
    isError: error,
  };
};

export const useMovieDetails = id => {
  const { data, error } = useSwr(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`,
    fetcher
  );

  if (error) {
    console.error(`Error getting movie details for id "${id}":`, error);
  }

  return {
    movieDetails: data || {},
    isLoading: !error && !data,
    isError: error,
  };
};

export const useMovieCredits = id => {
  const { data, error } = useSwr(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`,
    fetcher
  );

  if (error) {
    console.error(`Error getting movie credits for id "${id}":`, error);
  }

  return {
    movieCredits: data?.cast || [],
    isLoading: !error && !data,
    isError: error,
  };
};

export const useMovieReviews = id => {
  const { data, error } = useSwr(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`,
    fetcher
  );

  if (error) {
    console.error(`Error getting movie reviews for id "${id}":`, error);
  }

  return {
    movieReviews: data?.results || [],
    isLoading: !error && !data,
    isError: error,
  };
};
