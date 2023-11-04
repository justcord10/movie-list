import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

//make a axios get request and then render the DOM as a callback with the props passed in
ReactDOM.render(<App />, document.getElementById('app'));