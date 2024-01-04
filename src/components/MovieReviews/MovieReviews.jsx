const MovieReviews = ({ reviews, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading movie reviews</div>;
  }

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>{review.content}</li>
      ))}
    </ul>
  );
};

export default MovieReviews;
