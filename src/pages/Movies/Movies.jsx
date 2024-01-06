import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../../services/http-requests';

import Search from '../../components/Search/Search';
import MovieList from '../../components/MovieList/MovieList';

const Movies = () => {
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
        const { results } = await API.fetchData('search/movie', {
          params: { query: movieSearch },
        });
        setMovies(results);
      } catch (error) {
        console.error('Something went wrong, please try again', error);
      }
    };

    fetchMovies();
  }, [movieSearch]);

  return (
    <div>
      <div>
        <Search onSubmit={handleSubmit}>
          <label>
            Search:
            <input type="text" value={query} onChange={handleChange} />
          </label>
          <button type="submit">Search</button>
        </Search>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default Movies;


// import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { useSearchMovies } from './Custom';

// import Search from '../../components/Search/Search';
// import MovieList from '../../components/MovieList/MovieList';

// const Movies = () => {
//   const [query, setQuery] = useState('');
//   const [searchParams, setSearchParams] = useSearchParams();

//   const movieSearch = searchParams.get('query') ?? '';
//   const movies = useSearchMovies(movieSearch);

//   const handleChange = (e) => {
//     setQuery(e.currentTarget.value.toLowerCase());
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSearchParams({ query: query });
//     setQuery('');
//   };

//   return (
//     <div>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Search:
//             <input type="text" value={query} onChange={handleChange} />
//           </label>
//           <button type="submit">Search</button>
//         </form>
//         <MovieList movies={movies} />
//       </div>
//     </div>
//   );
// };

// export default Movies;
