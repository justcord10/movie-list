//need to map the array of movies and render each movie by passing each item into MovieListItem
const MovieList = ({ movies }) => {
  //
  return (
      {movies.map((movie) => (
        <MovieListItem movie={movie} />
      ))}
  );
}