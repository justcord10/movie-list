//functions kinda like our app from database sprint
//require our dependency modules
const express = require('express');
//set up our server and the port it is listening to
const app = express();
const PORT = 3000 || process.env.PORT; //to give our server the ability to flexibly listen to a port wherever it is run from

//need to look up what this does
app.use(express.static('client/dist'));

//tells our server where to listen
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})