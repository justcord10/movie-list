import React from 'react';
const MovieListItem = ({movie}) => {
  return (
    <div className='list-entry'>{movie.title}</div>
  );
}

export default MovieListItem;