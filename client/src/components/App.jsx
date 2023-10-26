//import relevant component files
import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';

const {useState} = React;

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
  //input text down in Search.jsx
  //movie list
  const [movieList, setMovieList] = React.useState([]);
  //search Results List
  const [searchResultsList, setSearchResultsList] = React.useState('');// which one is clearer??? this or const [query, setQuery] = useState('');
  //displayed List
  const [displayedList, setDisplayedList] = React.useState([]);


  //event Handler functions
  const searchHandleClick = (query) => {
    console.log('Clicked!');
    console.log(query);
    //declare empty array for search results list variable
    var results = [];
    //if query is '' then
    if (query === '') {
      //set display list to be the movie list
      setDisplayedList(movieList);
    }
    //store a deep copy of the movie list array
    var copyList = JSON.parse(JSON.stringify(movieList));
    //iterate through the copylist
    for (let i = 0; i < copyList.length; i++) {
      //if the current objects value string contains the query then
      if (copyList[i].title.includes(query)) {
        //push it onto the results array
        results.push(copyList[i]);
      }
    }
    //if out results list is empty then...
    if (results.length === 0) {
      //set the search results list with [{title:'no movie by that name found'}]
      setDisplayedList([{title:'no movie by that name found'}]);
    } else {
      //set the search results list with the results array
      setDisplayedList(results);
    }
    //debugger;
    console.log(displayedList);
  }

  const addHandleClick = (movieTitle) => {
    //console.log('clicked');
    //console.log(movieTitle);
    //new variable to hold the clone array of objects, with the added movie's object (use the spread operator!!)
    var newMovieList = [...movieList, {title:movieTitle, watched: false}];
    console.log(newMovieList);
    //set the movie list with the new one
    setMovieList(newMovieList);
    //set the displayed movie list with the new one
    setDisplayedList(newMovieList);
  };

  //watched click handler
  const watchedHandleClick = (title) => {
    //copy movie List
    var copyList = [...movieList];
    //iterate through the list
    for (let i = 0; i < copyList.length; i++) {
      //toggle current elements watched property when the title is found
      if (copyList[i].title === title) {
        copyList[i].watched === false ? copyList[i].watched = true : copyList[i].watched = false;
      };
    }
    //set movie list and displayed movie list
    console.log(copyList); //toggles properly!
    setMovieList(copyList);
    setDisplayedList(copyList);
  };

  //new filter click handler
  const filterHandleClick = (isWatched) => {
    console.log(isWatched);
    //declare empty results array
    //copy movieList using spread operator
    //iterate through the copy list
      //if the current movies watched value matches isWatched
        //push that object onto the results list
    //set the displayedList with results
  };

  //need to have a title at the top in its own little bar
  //need to render out the movie list component in its own div with movies passed in
  return (
    <div>
      <h1 className="title">MovieList</h1>
      <div>< Add addHandleClick={addHandleClick}/></div>
      <div>
        <button className='watched-button' onClick={()=>filterHandleClick(true)}>Watched</button>
        <button className='towatch-button' onClick={()=>filterHandleClick(false)}>To Watch</button>
        <div>< Search searchHandleClick={searchHandleClick} /></div>
      </div>
      <div>< MovieList movies={displayedList} watchedHandleClick={watchedHandleClick}/></div>
    </div>
  );
}

//ACTUALLY!! dont need to do it is done in the index.js file!!
//render the page for the first time
export default App;