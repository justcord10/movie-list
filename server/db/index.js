//create a connection to our database with proper credentials and export it
var mysql = require('mysql2');

const connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'movielist'
});

module.exports = connection;