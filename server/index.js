//functions kinda like our app from database sprint

//require our dependency modules
const express = require('express');
const db = require('./db');
//require our middleware
const morgan = require('morgan');
const cors = require('cors');
//require router
const router = require('./routes');


//set up our server and the port it is listening to
const app = express();
const PORT = 3000 || process.env.PORT; //to give our server the ability to flexibly listen to a port wherever it is run from






//logging of server requests
//need to look up what this does//is used to serve static files such as images,css files, and js files in a directory named client/dist
//can be used to increase the efficiency and performance of the web app
app.use(express.static('client/dist'));
//use morgan with the dev preset to see our requests
app.use(morgan('dev'));
app.use(cors());
//parse our data with JSON
app.use(express.json());
//connect the server to the router
app.use('/api', router); //so any api request to this path will use the routes.js file to do that

//app.get('api/movies')

//tells our server where to listen
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})