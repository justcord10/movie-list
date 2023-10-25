//import relevant component files
import React from 'react';
import MovieList from './MovieList.js';
import MovieListItem from './MovieListItem.js';

//test data
const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

//need to change to allow js logic
const App = (props) => {
  //States
  //event Handler functions


  //need to have a title at the top in its own little bar
  //need to render out the movie list component in its own div with movies passed in
  return (
    <div>
      <h1 class="title">MovieList</h1>
      <div class="movie-list">< MovieList movies={movies} /></div>
    </div>
  );
}

//ACTUALLY!! dont need to do it is done in the index.js file!!
//render the page for the first time
export default App;