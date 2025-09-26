const express = require('express');
const app = express();
app.use(express.json());
const moviesRouter = require('./routes/movies');
app.use('/movies', moviesRouter);
app.use('/', (req, res) => {
    res.send('Welcome to Movie Buffet');
});

app.listen(3000, () => console.log('Server running on port 3000'));