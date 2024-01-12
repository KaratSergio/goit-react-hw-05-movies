import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import * as API from '../../services/http-requests';
import DefaultPhoto from './DefaultPhoto/DefaultPhoto';

import {
  CastContainer,
  Photo,
  ActorCard,
  ActorName,
  ActorRole,
  ErrorText,
} from './Cast.styled';

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
        toast.error('Something went wrong, please try again');
      }
    };

    fetchMovieCredits();
  }, [id]);

  if (!credits || credits.length === 0) {
    return (
      <div>
        <ErrorText>No credits information for this movie</ErrorText>
      </div>
    );
  }

  return (
    <CastContainer>
      {credits.map(({ profile_path, name, character, id }) => {
        return (
          <ActorCard key={id}>
            {profile_path ? (
              <Photo src={`${baseURL}${profile_path}`} alt={name} />
            ) : (
              <DefaultPhoto />
            )}
            <div>
              <ActorName>{name}</ActorName>
              <ActorRole>Role: {character}</ActorRole>
            </div>
          </ActorCard>
        );
      })}
    </CastContainer>
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
