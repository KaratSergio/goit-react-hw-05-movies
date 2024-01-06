import { useState, useEffect } from 'react';

import * as API from '../../services/http-requests';

import MovieList from '../../components/MovieList/MovieList';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    renderTrending();
  }, []);

  const renderTrending = async () => {
    try {
      const { results } = await API.fetchData('trending/movie/day');
      setTrending(results);
    } catch (error) {
      console.error('Something went wrong, please try again', error);
    }
  };

  return (
    <div>
      <h2>Trending movies</h2>
      <MovieList movies={trending} />
    </div>
  );
};

export default Home;
