import { useEffect, useState, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { fetchData } from '../../services/http-requests';
import RatingBar from '../../components/RatingBar/RatingBar';

import * as Styled from './MovieDetails.styled';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const from = location.state?.from || '/';
  const baseURL = 'https://image.tmdb.org/t/p/w400';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const results = await fetchData(`movie/${id}`);
        setDetails(results);
      } catch (error) {
        console.error('Something went wrong, please try again', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!details) return null;

  const { title, poster_path, release_date, vote_average, overview, genres } =
    details;
  const releaseYear = (release_date || '').slice(0, 4);
  const score = !isNaN(vote_average) ? Math.round(vote_average * 10) : 0;

  return (
    <Styled.Wrapper>
      <Styled.BackBtn to={from}>Go back</Styled.BackBtn>
      <Styled.DetailsContainer>
        <Styled.Poster
          src={poster_path && `${baseURL}${poster_path}`}
          alt={title}
        />
        <Styled.MovieInfo>
          <Styled.Title>
            {title} ({releaseYear})
          </Styled.Title>
          <RatingBar score={score} />{' '}
          <Styled.SubTitle>Overview</Styled.SubTitle>
          <Styled.TextContent>{overview}</Styled.TextContent>
          <Styled.SubTitle>Genres</Styled.SubTitle>
          <Styled.TextContent>
            {genres && genres.map(genre => genre.name).join(', ')}
          </Styled.TextContent>
          <Styled.SubTitle>Additional Information</Styled.SubTitle>
          <Styled.InfoList>
            <Styled.InfoItem>
              <Styled.InfoLink to="cast" state={{ from }}>
                Cast
              </Styled.InfoLink>
            </Styled.InfoItem>
            <Styled.InfoItem>
              <Styled.InfoLink to="reviews" state={{ from }}>
                Reviews
              </Styled.InfoLink>
            </Styled.InfoItem>
          </Styled.InfoList>
        </Styled.MovieInfo>
      </Styled.DetailsContainer>
      <Suspense
        color={'#301934'}
        loading={true}
        fallback={
          <Styled.Loader aria-label="Loading Spinner" data-testid="loader" />
        }
      >
        <Outlet />
      </Suspense>
    </Styled.Wrapper>
  );
};

export default MovieDetails;
