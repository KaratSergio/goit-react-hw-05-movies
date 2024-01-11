import { useEffect, useState, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { fetchData } from '../../services/http-requests';

import {
  Loader,
  BackBtn,
  Wrapper,
  Poster,
  DetailsContainer,
  MovieInfo,
  Title,
  SubTitle,
  TextContent,
  Accent,
  Score,
  InfoList,
  InfoItem,
  InfoLink,
  RatingBar,
  FilledRating,
  RatingText,
} from './MovieDetails.styled';

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

  const { title, poster_path, release_date, vote_average, overview, genres } = details;
  const releaseYear = (release_date || '').slice(0, 4);
  const score = !isNaN(vote_average) ? Math.round(vote_average * 10) : 0;

  return (
    <Wrapper>
      <BackBtn to={from}>
        Go back
      </BackBtn>
      <DetailsContainer>
        <Poster src={poster_path && `${baseURL}${poster_path}`} alt={title} />
        <MovieInfo>
          <Title>
            {title} ({releaseYear})
          </Title>
          <RatingBar>
            <FilledRating percentage={score} />
          <RatingText >
            <Accent>Rating</Accent>
            <Score>{score}%</Score>
          </RatingText>
          </RatingBar>
          <SubTitle>Overview</SubTitle>
          <TextContent>{overview}</TextContent>
          <SubTitle>Genres</SubTitle>
          <TextContent>{genres && genres.map(genre => genre.name).join(', ')}</TextContent>
          <SubTitle>Additional Information</SubTitle>
          <InfoList>
            <InfoItem>
              <InfoLink to="cast" state={{ from }}>
                Cast
              </InfoLink>
            </InfoItem>
            <InfoItem>
              <InfoLink to="reviews" state={{ from }}>
                Reviews
              </InfoLink>
            </InfoItem>
          </InfoList>
        </MovieInfo>
      </DetailsContainer>
      <Suspense
        color={'#301934'}
        loading={true}
        fallback={<Loader aria-label="Loading Spinner" data-testid="loader" />}
      >
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default MovieDetails;

