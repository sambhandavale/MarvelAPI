import express from 'express';
import moviesData from '../../data/movies.js'; 

const router = express.Router();

router.get('/:id', (req, res) => {
    const idNo = req.params.id;
    const movie = moviesData.movie.filter(movie => movie.id === idNo);
    if (movie.length === 0) {
        res.status(404).json({ error: 'Movie not found' });
    } else {
        res.json(movie);
    }
});

export default router;
