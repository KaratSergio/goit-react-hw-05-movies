import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../../services/http-requests';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const results = await API.fetchData(`movie/${id}/reviews`);
        setReviews(results);
      } catch (error) {
        console.error('Something went wrong, please try again', error);
      }
    };

    fetchMovieReviews();
  }, [id]);

  if (!reviews || reviews.length === 0) {
    return (
      <div>
        <h2>No reviews for this movie</h2>
      </div>
    );
  }

  return (
    <div>
      <div>
        {reviews.map(({ author, content, id }) => (
          <div key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default Reviews;
