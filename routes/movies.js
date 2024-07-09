import express from 'express';
import moviesData from '../data/movies.js';

import phaseRouter from './movies/phaseRoute.js'
import yearRoute from '../routes/movies/yearRoute.js'
import idRoute from '../routes/movies/idRoute.js'
import movieRoute from '../routes/movies/movieRoute.js'
import propertyRoute from '../routes/movies/propertyRoute.js'

const router = express.Router();

router.get('/', (req, res) => {
    const { title, id, studios, language_code, phase, year, genre, movie, onlystudios } = req.query;
    let filteredMovies = moviesData.movie;

    if (title) {
        filteredMovies = filteredMovies.filter(movie => movie.title === title);
    } else if (id) {
        filteredMovies = filteredMovies.filter(movie => movie.id === id);
    } else if (studios) {
        filteredMovies = filteredMovies.filter(movie => movie.studios.includes(studios));
    } else if (language_code) {
        filteredMovies = filteredMovies.filter(movie => movie.language_code === language_code);
    } else if (phase) {
        filteredMovies = filteredMovies.filter(movie => movie.phase.toString() === phase);
    } else if (year) {
        filteredMovies = filteredMovies.filter(movie => movie.year_of_release.toString() === year);
    } else if (genre) {
        filteredMovies = filteredMovies.filter(movie => movie.genre.includes(genre));
    } if (genre && year) {
        filteredMovies = filteredMovies.filter(movie => movie.genre.includes(genre) && movie.year_of_release.toString() === year);
    } if (genre && phase) {
        filteredMovies = filteredMovies.filter(movie => movie.genre.includes(genre) && movie.phase.toString() === phase);
    } if (movie) {
        filteredMovies = filteredMovies.filter(movie1 => movie1.version.split("-")[0] === movie);
    } if (onlystudios) {
        filteredMovies = filteredMovies.filter(movie => movie.studios.length === 1 && movie.studios.includes(onlystudios));
    }

    if (filteredMovies.length === 0) {
        res.status(404).json({ error: 'Movie not found' });
    } else {
        res.json(filteredMovies);
    }
});

// router.post('/property/:propertyname', (req, res) => {
//     const { propertyname } = req.params;
//     const { propertyValue } = req.body;

//     if (!propertyname || !propertyValue) {
//         return res.status(400).json({ error: 'Property name and value are required.' });
//     }

//     moviesData.movie.forEach(movie => {
//         movie[propertyname] = propertyValue;
//     });

//     const __filename = fileURLToPath(import.meta.url);
//     const filePath = path.resolve(path.dirname(__filename), '../data/movies.js');
//     const newData = `export default ${JSON.stringify(moviesData, null, 2)};`;

//     fs.writeFile(filePath, newData, err => {
//         if (err) {
//             console.error('Error writing file:', err);
//             return res.status(500).json({ error: 'Error saving data.' });
//         }

//         res.status(200).json({
//             message: `Added ${propertyname} property with value ${propertyValue} to all movies.`,
//         });
//     });
// });

// router.delete('/property/:propertyname', (req, res) => {
//     const { propertyname } = req.params;

//     if (!propertyname) {
//         return res.status(400).json({ error: 'Property name is required.' });
//     }

//     moviesData.movie.forEach(movie => {
//         delete movie[propertyname];
//     });

//     const __filename = fileURLToPath(import.meta.url);
//     const filePath = path.resolve(path.dirname(__filename), '../data/movies.js');
//     const newData = `export default ${JSON.stringify(moviesData, null, 2)};`;

//     fs.writeFile(filePath, newData, err => {
//         if (err) {
//             console.error('Error writing file:', err);
//             return res.status(500).json({ error: 'Error saving data.' });
//         }

//         res.status(200).json({
//             message: `Deleted ${propertyname} property from all movies.`,
//         });
//     });
// });

router.use('/property', propertyRoute)
router.use('/phase', phaseRouter);
router.use('/year', yearRoute);
router.use('/id', idRoute);
router.use('/movie', movieRoute);

export default router;
