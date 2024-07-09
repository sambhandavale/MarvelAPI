import express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import moviesData from '../../data/movies.js';

const router = express.Router();

// POST request to add a property to movies
router.post('/:propertyname', (req, res) => {
    const { propertyname } = req.params;
    const { propertyValue } = req.body;

    if (!propertyname || !propertyValue) {
        return res.status(400).json({ error: 'Property name and value are required.' });
    }

    moviesData.movie.forEach(movie => {
        movie[propertyname] = propertyValue;
    });

    const __filename = fileURLToPath(import.meta.url);
    const filePath = path.resolve(path.dirname(__filename), '../../data/movies.js'); // Adjust the path as needed
    const newData = `export default ${JSON.stringify(moviesData, null, 2)};`;

    fs.writeFile(filePath, newData, err => {
        if (err) {
            console.error('Error writing file:', err);
            return res.status(500).json({ error: 'Error saving data.' });
        }

        res.status(200).json({
            message: `Added ${propertyname} property with value ${propertyValue} to all movies.`,
        });
    });
});

// DELETE request to delete a property from movies
router.delete('/:propertyname', (req, res) => {
    const { propertyname } = req.params;

    if (!propertyname) {
        return res.status(400).json({ error: 'Property name is required.' });
    }

    moviesData.movie.forEach(movie => {
        delete movie[propertyname];
    });

    const __filename = fileURLToPath(import.meta.url);
    const filePath = path.resolve(path.dirname(__filename), '../../data/movies.js'); // Adjust the path as needed
    const newData = `export default ${JSON.stringify(moviesData, null, 2)};`;

    fs.writeFile(filePath, newData, err => {
        if (err) {
            console.error('Error writing file:', err);
            return res.status(500).json({ error: 'Error saving data.' });
        }

        res.status(200).json({
            message: `Deleted ${propertyname} property from all movies.`,
        });
    });
});

// POST request to add a property to specific movie
router.post('/:movietitle/:propertyname', (req, res) => {
    const { movietitle, propertyname } = req.params;
    const { propertyValue } = req.body;

    if (!movietitle || !propertyname || !propertyValue) {
        return res.status(400).json({ error: 'Movie title, property name, and value are required.' });
    }

    const movieToUpdate = moviesData.movie.find(movie => movie.title === movietitle);

    if (!movieToUpdate) {
        return res.status(404).json({ error: `Movie with title '${movietitle}' not found.` });
    }

    movieToUpdate[propertyname] = propertyValue;

    const __filename = fileURLToPath(import.meta.url);
    const filePath = path.resolve(path.dirname(__filename), '../../data/movies.js');
    const newData = `export default ${JSON.stringify(moviesData, null, 2)};`;

    fs.writeFile(filePath, newData, err => {
        if (err) {
            console.error('Error writing file:', err);
            return res.status(500).json({ error: 'Error saving data.' });
        }

        res.status(200).json({
            message: `Added ${propertyname} property with value ${propertyValue} to movie '${movietitle}'.`,
        });
    });
});

export default router;
