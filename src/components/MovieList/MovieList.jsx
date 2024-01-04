const MovieList = ({ movies, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading movies</div>;
  }

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default MovieList;
