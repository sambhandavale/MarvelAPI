import express from 'express';
import moviesData from '../../data/movies.js';

const router = express.Router();

router.get('/:year', (req, res) => {
    const year = req.params.year;
    const movie = moviesData.movie.filter(movie => movie.year_of_release.toString() === year);
    if (movie.length === 0) {
        res.status(404).json({ error: 'Movie not found' });
    } else {
        res.json(movie);
    }
});

export default router;
