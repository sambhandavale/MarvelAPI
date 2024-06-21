import express from 'express';
import showsData from '../../data/shows.js';

const router = express.Router();

router.get('/', (req, res) => {
    const netflixShows = showsData.series.filter(show => show.network.includes("Netflix"));
    if (netflixShows.length === 0) {
        res.status(404).json({ error: 'Show not found' });
    } else {
        res.json(netflixShows);
    }
});

export default router;
