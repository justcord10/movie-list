//make requests to the database!
const db = require('../db');
module.exports = {
  //get all movies from our database
  getAll: function (callback) {
    //query our db for proper cols and send the data back to our callback
    db.query( 'SELECT name, watched FROM movies', (err, data) => {callback(err, data)});
  },
  //add a movie to our database
  create: function (movie, callback) {
    //query our database and send appropriate data back
    db.query( 'INSERT INTO movies (name) VALUES (?)',
      [movie],
      (err, data) => {
        callback(err, data);
      });
  },
  update: function (movie, callback) {
    //need to toggle the watched property of the resource with name = movie
    db.query('UPDATE movies SET watched = watched XOR 1 WHERE name = ?',
    [movie],
    (err, data) => {
      callback(err, data);
    });
  },
  invalid: function (callback) {
    callback();
  }
  //will need one more method to modify the watched property
}