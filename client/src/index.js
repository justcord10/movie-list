import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
var axios = require('axios')
axios.get('/api/movies')
  .then(function (res) {
    const movies = res.body;
    ReactDOM.render(<App movies ={movies}/>, document.getElementById('app'));
  })
  .catch(function (err) {
    console.log(err)
  })
//make a axios get request and then render the DOM as a callback with the props passed in
//ReactDOM.render(<App />, document.getElementById('app'));