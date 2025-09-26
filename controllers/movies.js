const movieServices = require('../services/movies');

/**
 * Get all movies
 * @param {object} req 
 * @param {object} res 
 */
const getMovies = (req, res) => {
    const movies = movieServices.getAllMovies();
    res.status(200).send(movies);
}

/**
 * Get id from the path param and fetch the movie by using movie service
 * @param {object} req 
 * @param {object} res 
 */
const getMovie = (req, res) => {
    const id = req.params.id;
    const movies = movieServices.getMovieById(id);
    movies ? res.status(200).send(movies) : res.status(404).send({ message: 'Movie not found' });
    res.status(200).send(movies);
}

/**
 * Check if name and genre are present in the request body and then add the movie
 * @param {object} req 
 * @param {object} res 
 */
const postMovie = (req, res) => {
    const { name, genre } = req.body;
    if (!name || !genre) {
        res.status(400).send({ message: 'Name and genre are required' });
    } else {
        movieServices.addMovie(name, genre);
        es.status(201).send({ message: 'Movie added successfully' });
    }
}

module.exports = { getMovies, getMovie, postMovie};