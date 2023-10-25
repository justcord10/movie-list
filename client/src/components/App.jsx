//import relevant component files
import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';
import Search from './MovieListItem.jsx';


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
      <h1 className="title">MovieList</h1>
      <div></div>
      <div>< MovieList movies={movies} /></div>
    </div>
  );
}

//ACTUALLY!! dont need to do it is done in the index.js file!!
//render the page for the first time
export default App;