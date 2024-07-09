import express from 'express';
import showsData from '../data/shows.js';

import netflixRouter from '../routes/shows/netflixRoute.js'
import propertyRoute from '../routes/shows/propertyRoute.js'

const router = express.Router(); 

router.get('/', (req, res) => {
    const { title, id, network, genre, year } = req.query;
    let filteredShows = showsData.series;

    if (title) {
        filteredShows = filteredShows.filter(show => show.title === title);
    } else if (id) {
        filteredShows = filteredShows.filter(show => show.id === id);
    } else if (network) {
        filteredShows = filteredShows.filter(show => show.network.includes(network));
    } else if (genre) {
        filteredShows = filteredShows.filter(show => show.genre.includes(genre));
    } else if (year) {
        filteredShows = filteredShows.filter(show => show.year_of_release.toString() === year);
    }

    // to check both network and genre at the same time
    if (network && genre) {
        filteredShows = filteredShows.filter(show => show.network.includes(network) && show.genre.includes(genre));
    }

    if (filteredShows.length === 0) {
        res.status(404).json({ error: 'Show not found' });
    } else {
        res.json(filteredShows);
    }
});

router.use('/property', propertyRoute);
router.use('/netflix', netflixRouter);


export default router;
