const models = require('../models');

module.exports = {
  get: function (req, res) {
    models.movies.getAll((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
  post: function (req, res) {
    const movie = req.body.name;
    models.movies.create(movie, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  },
  put: function (req, res) {
    const movie = req.body.name;
    models.movies.update(movie, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
  invalid: function (req, res) {
    models.movies.invalid(() => {
      res.status(400).send('Hello World!');
    });
  }
  //will need one more method to handle changing the movies watched property.
}