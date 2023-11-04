//connect methods and paths in app to the proper HANDLERS
//create an express router object and store a reference in router
var router = require('express').Router();
var controllers = require('./controllers');
//attach proper methods to it.
router.get('/movies', controllers.movies.get);
router.post('/movies', controllers.movies.post);
router.put('/movies', controllers.movies.invalid);
router.patch('/movies', controllers.movies.invalid);
router.delete('/movies', controllers.movies.invalid);
router.head('/movies', controllers.movies.invalid);
router.options('/movies', controllers.movies.invalid);

module.exports = router;