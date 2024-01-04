const MovieDetails = ({ details, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading movie details</div>;
  }

  return (
    <div>
      <h3>{details.title}</h3>
      <p>{details.overview}</p>
    </div>
  );
};

export default MovieDetails;
