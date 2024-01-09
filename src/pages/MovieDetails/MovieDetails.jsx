import { useEffect, useState, Suspense } from 'react';
import { useLocation, useParams, Outlet, Link } from 'react-router-dom';
import { fetchData } from '../../services/http-requests';

export const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const from = location.state?.from ?? '/';
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
    <div>
      <button type="button">
        <Link to={from}>Go back</Link>
      </button>
      <div>
        {poster_path && <img src={`${baseURL}${poster_path}`} alt={title} />}
        <div>
          <h1>
            {title} ({releaseYear})
          </h1>
          <p>
            User Score: <span>{score}%</span>
          </p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres && genres.map((genre) => genre.name).join(', ')}</p>
          <h2>Additional Information</h2>
          <ul>
            <li>
              <Link to="cast" state={{ from }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from }}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;

