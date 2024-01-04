import { useState } from 'react';
import {
  useTrendingMovies,
  useSearchMovies,
  useMovieDetails,
  useMovieCredits,
  useMovieReviews,
} from '../services/http-requests';
import MovieList from './MovieList/MovieList';
import MovieDetails from './MovieDetails/MovieDetails';
import MovieCredits from './MovieCredits/MovieCredits';
import MovieReviews from './MovieReviews/MovieReviews';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const {
    trendingMovies,
    isLoading: trendingLoading,
    isError: trendingError,
  } = useTrendingMovies();

  const {
    searchResults,
    isLoading: searchLoading,
    isError: searchError,
  } = useSearchMovies(searchQuery);

  const {
    movieDetails,
    isLoading: detailsLoading,
    isError: detailsError,
  } = useMovieDetails(selectedMovieId);

  const {
    movieCredits,
    isLoading: creditsLoading,
    isError: creditsError,
  } = useMovieCredits(selectedMovieId);
  
  const {
    movieReviews,
    isLoading: reviewsLoading,
    isError: reviewsError,
  } = useMovieReviews(selectedMovieId);

  const handleSearch = query => {
    setSearchQuery(query);
    setSelectedMovieId(null);
  };

  const handleSelectMovie = id => {
    setSelectedMovieId(id);
    setSearchQuery('');
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={e => handleSearch(e.target.value)}
        placeholder="Search movies"
      />

      <h2>Trending Movies</h2>
      <MovieList
        movies={trendingMovies}
        loading={trendingLoading}
        error={trendingError}
        onSelectMovie={handleSelectMovie}
      />

      <h2>Search Results</h2>
      <MovieList
        movies={searchResults}
        loading={searchLoading}
        error={searchError}
        onSelectMovie={handleSelectMovie}
      />

      <MovieDetails
        details={movieDetails}
        loading={detailsLoading}
        error={detailsError}
      />
      <MovieCredits
        credits={movieCredits}
        loading={creditsLoading}
        error={creditsError}
      />
      <MovieReviews
        reviews={movieReviews}
        loading={reviewsLoading}
        error={reviewsError}
      />
    </div>
  );
};

export default App;
