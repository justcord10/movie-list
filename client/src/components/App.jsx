const axios = require('axios');

//import relevant component files
import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';


const {useState} = React;

const App = () => {

//States
  const [movieList, setMovieList] = React.useState([]);
  const [displayedList, setDisplayedList] = React.useState([]);

  //use useEffect with an empty array in second arg to only do something once on first render.
  React.useEffect( () => {
    //apiCall
    axios.get('/api/movies')
    .then(function (res) {
      const movies = res.data;
      //set movie list and displayed list
      setMovieList(movies);
      setDisplayedList(movies);
    })
    .catch(function (err) {
      console.log(err);
      alert(err);
    });
  }, []);

  //event Handler functions
  const searchHandleClick = (query) => {
    var results = [];
    if (query === '') {
      setDisplayedList(movieList);
    }
    var copyList = JSON.parse(JSON.stringify(movieList));
    for (let i = 0; i < copyList.length; i++) {
      if (copyList[i].name.includes(query)) {
        results.push(copyList[i]);
      }
    }
    if (results.length === 0) {
      setDisplayedList([{name:'no movie by that name found'}]);
    } else {
      setDisplayedList(results);
    }
    console.log(displayedList);
  }

  const addHandleClick = (movieTitle) => {
    var newMovieList = [...movieList, {name:movieTitle, watched: false}];
    setMovieList(newMovieList);
    setDisplayedList(newMovieList);
    //need to update the db with an api call
    axios.post('/api/movies', {name:movieTitle})
    .then(function (res) {
      const movies = res.data;
      console.log()
    })
    .catch(function (err) {
      console.log(err);
      alert(err);
    });
  };

  const watchedHandleClick = (name) => {
    var copyList = [...movieList];
    for (let i = 0; i < copyList.length; i++) {
      if (copyList[i].name === name) {
        copyList[i].watched === false ? copyList[i].watched = true : copyList[i].watched = false;
      };
    }
    setMovieList(copyList);
    setDisplayedList(copyList);
    //toggle the db resource watched property for the movie with the name === name
    axios.put('/api/movies', {name:name})
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
      alert(err);
    });
  };

  //new filter click handler
  const filterHandleClick = (isWatched) => {
    console.log(isWatched);
    var results = [];
    var copyList = [...movieList];
    for (let i = 0; i < copyList.length; i++) {
      copyList[i].watched === isWatched ? results.push(copyList[i]): results;
    }
    setDisplayedList(results);
  };


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

export default App;