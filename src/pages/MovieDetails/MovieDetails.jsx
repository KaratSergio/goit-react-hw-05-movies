import { useEffect, useState, Suspense } from 'react';
import { useLocation, useParams, Outlet, Link } from 'react-router-dom';
import { useMovieDetails } from '../../services/http-requests';

const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const from = location.state?.from ?? '/';
  const baseURL = 'https://image.tmdb.org/t/p/w400';

  const { data: results, error } = useMovieDetails(id);

  useEffect(() => {
    if (error) {
      console.error('Something went wrong, please try again', error);
    } else {
      setDetails(results);
    }
  }, [results, error]);

  if (!details) return null;

  const { title, poster_path, release_date, vote_average, overview, genres } = details;
  const releaseYear = (release_date || '').slice(0, 4);
  const score = Math.round(vote_average * 10);

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
