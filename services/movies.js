const fs = require("fs");
const Movie = require("../models/movies");

/**
 * Get all movies from the JSON file
 * @returns {Array} Array of movies
 */
const getAllMovies = async () => {
  //   const movies = fs.readFileSync("./movies.json");
  //   const moviesJson = JSON.parse(movies);
  //   return moviesJson;
  return await Movie.find();
};

/**
 * Get a movie by its Id
 * @param {string} id
 * @returns
 */
const getMovieById = async (id) => {
  //   const movies = getAllMovies();
  //   return movies.find((movie) => movie.id === id);
  return await Movie.findById(id);
};

/**
 * Add a new movie to the JSON file
 * @param {string} name
 * @param {string} genre
 */
const addMovie = async (movie) => {
  // const movies = getAllMovies();
  // const newMovie = { id: movies.length + 1, name, genre };
  // movies.push(newMovie);
  // fs.writeFileSync('./movies.json', JSON.stringify(movies));

  // movie = { name: "Movie Name", genre: "xyz".....}

  await Movie.insertOne(movie);
};

module.exports = { getAllMovies, getMovieById, addMovie };
