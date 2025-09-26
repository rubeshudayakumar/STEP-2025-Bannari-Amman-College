const fs = require('fs');

/**
 * Get all movies from the JSON file
 * @returns {Array} Array of movies
 */
const getAllMovies = () => {
    const movies = fs.readFileSync('./movies.json');
    const moviesJson = JSON.parse(movies);
    return moviesJson;
}

/**
 * Get a movie by its Id
 * @param {string} id 
 * @returns 
 */
const getMovieById = (id) => {
    const movies = getAllMovies();
    return movies.find(movie => movie.id === id);
}

/**
 * Add a new movie to the JSON file
 * @param {string} name 
 * @param {string} genre 
 */
const addMovie = (name, genre) => {
    const movies = getAllMovies();
    const newMovie = { id: movies.length + 1, name, genre };
    movies.push(newMovie);
    fs.writeFileSync('./movies.json', JSON.stringify(movies));
}

module.exports = { getAllMovies, getMovieById, addMovie };