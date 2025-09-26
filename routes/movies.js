const express = require('express');
const router = express.Router();
const { getMovies, getMovie, postMovie} = require('../controllers/movies');

router.get('/', getMovies);
router.get('/:id', getMovie);
router.post('/', postMovie);

module.exports = router;