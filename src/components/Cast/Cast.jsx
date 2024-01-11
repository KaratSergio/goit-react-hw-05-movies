import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../../services/http-requests';

import { CastContainer } from './Cast.styled';

export const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { id } = useParams();
  const baseURL = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const { cast: results } = await API.fetchData(`movie/${id}/credits`);
        setCredits(results);
      } catch (error) {
        console.error('Something went wrong, please try again', error);
      }
    };

    fetchMovieCredits();
  }, [id]);

  if (!credits || credits.length === 0) {
    return (
      <div>
        <h2>No credits information for this movie</h2>
      </div>
    );
  }

  return (
    <div>
      <CastContainer>
        {credits.map(({ profile_path, name, character, id }) => {
          return (
            <div key={id}>
              <img
                src={profile_path ? `${baseURL}${profile_path}` : ''}
                alt={name}
              />
              <div>
                <p>{name}</p>
                <p>Character: {character}</p>
              </div>
            </div>
          );
        })}
      </CastContainer>
    </div>
  );
};

Cast.propTypes = {
  credits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};

export default Cast;
