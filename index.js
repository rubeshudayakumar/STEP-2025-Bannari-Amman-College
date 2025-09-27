const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const moviesRouter = require("./routes/movies");
app.use("/movies", moviesRouter);
require("dotenv").config();
app.use("/", (req, res) => {
  res.send("Welcome to Movie Buffet");
});

mongoose.connect(process.env.CONNECTION_STRING).then(() => {
  console.log("MovieDB Connected");
});

app.listen(process.env.PORT, () =>
  console.log("Server running on port: " + process.env.PORT)
);
