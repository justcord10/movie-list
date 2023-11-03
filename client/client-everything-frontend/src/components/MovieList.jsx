import React from 'react';
//import children files
import MovieListItem from './MovieListItem.jsx'
//need to map the array of movies and render each movie by passing each item into MovieListItem
var MovieList = ({movies, watchedHandleClick}) => {
  //console.log(movies);
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div><MovieListItem movie={movie} watchedHandleClick={watchedHandleClick}/></div>
      ))}
    </div>
  );
}

export default MovieList;