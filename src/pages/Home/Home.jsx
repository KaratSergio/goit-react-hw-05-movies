import { useState, useEffect } from 'react';
import * as API from '../../services/http-requests';
import MovieList from '../../components/MovieList/MovieList';
import { toast } from 'react-hot-toast';

import { HomeWrapper, Title } from './Home.styled';

export const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    renderTrending();
  }, []);

  const renderTrending = async () => {
    try {
      const { results } = await API.fetchData('trending/movie/day');
      setTrending(results);
    } catch (error) {
      toast.error('Something went wrong, please try again');
    }
  };

  return (
    <HomeWrapper>
      <Title>Trending movies</Title>
      <MovieList movies={trending} />
    </HomeWrapper>
  );
};

export default Home;
