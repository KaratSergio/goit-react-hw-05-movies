import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import * as API from '../../services/http-requests';

import { Main, AuthorBox, AuthorName, Commit, ErrorText } from './Reviews.styled'

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await API.fetchData(`movie/${id}/reviews`);
        const reviewsArray =
          response.results && Array.isArray(response.results)
            ? response.results
            : [];
        setReviews(reviewsArray);
      } catch (error) {
        toast.error('Something went wrong, please try again');
      }
    };

    fetchMovieReviews();
  }, [id]);

  if (!Array.isArray(reviews) || reviews.length === 0) {
    return (
      <div>
        <ErrorText>No reviews for this movie</ErrorText>
      </div>
    );
  }

  return (
    <Main>
      <div>
        {reviews.map(({ author, content, id }) => (
          <div key={id}>
            <AuthorBox>
              <AuthorName>Author: {author}</AuthorName>
            </AuthorBox>
            <Commit>{content}</Commit>
          </div>
        ))}
      </div>
    </Main>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default Reviews;
