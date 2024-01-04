const MovieCredits = ({ credits, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading movie credits</div>;
  }

  return (
    <ul>
      {credits.map(actor => (
        <li key={actor.id}>{actor.name}</li>
      ))}
    </ul>
  );
};

export default MovieCredits;
