import express from 'express';
import moviesData from '../../data/movies.js'; 

const router = express.Router();

router.get('/:movie', (req, res) => {
    const movie = req.params.movie;
    const filterMovie = moviesData.movie.filter(movie1 => movie1.version.split("-")[0] === movie);
    if (movie.length === 0) {
        res.status(404).json({ error: 'Movie not found' });
    } else {
        res.json(filterMovie);
    }
});

export default router;