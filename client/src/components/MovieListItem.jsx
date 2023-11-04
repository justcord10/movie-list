import React from 'react';
const MovieListItem = ({movie, watchedHandleClick}) => {
  return (
    <div>
    <div className='list-entry'>{movie.name}</div>
    <button className='watched-button' onClick={(e)=>{
      watchedHandleClick(movie.name);
      e.target.value === 'To Watch' ? e.target.value = 'Watched' : e.target.value = 'To Watch';
      }}>To Watch</button>
    </div>
  );
}

export default MovieListItem;