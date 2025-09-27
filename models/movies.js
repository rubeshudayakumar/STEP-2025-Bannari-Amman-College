const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
  favouriteStatus: {
    type: Boolean,
    default: false,
  },
  posterLink: {
    type: String,
  },
  plot: {
    type: String,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
