import express from 'express';
import moviesData from '../../data/movies.js'; 

const router = express.Router();

router.get('/:phase', (req, res) => {
    const phase = req.params.phase;
    const movie = moviesData.movie.filter(movie => movie.phase.toString() === phase);
    if (movie.length === 0) {
        res.status(404).json({ error: 'Movie not found' });
    } else {
        res.json(movie);
    }
});

export default router;
