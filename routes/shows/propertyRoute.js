import express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import showsData from '../../data/shows.js'; 

const router = express.Router();

// POST request to add a property to shows
router.post('/:propertyname', (req, res) => {
    const { propertyname } = req.params;
    const { propertyValue } = req.body;

    if (!propertyname || !propertyValue) {
        return res.status(400).json({ error: 'Property name and value are required.' });
    }

    showsData.series.forEach(show => {
        show[propertyname] = propertyValue;
    });

    const __filename = fileURLToPath(import.meta.url);
    const filePath = path.resolve(path.dirname(__filename), '../../data/shows.js'); // Adjust the path as needed
    const newData = `export default ${JSON.stringify(showsData, null, 2)};`;

    fs.writeFile(filePath, newData, err => {
        if (err) {
            console.error('Error writing file:', err);
            return res.status(500).json({ error: 'Error saving data.' });
        }

        res.status(200).json({
            message: `Added ${propertyname} property with value ${propertyValue} to all shows.`,
        });
    });
});

// DELETE request to delete a property from shows
router.delete('/:propertyname', (req, res) => {
    const { propertyname } = req.params;

    if (!propertyname) {
        return res.status(400).json({ error: 'Property name is required.' });
    }

    showsData.series.forEach(show => {
        delete show[propertyname];
    });

    const __filename = fileURLToPath(import.meta.url);
    const filePath = path.resolve(path.dirname(__filename), '../../data/shows.js'); // Adjust the path as needed
    const newData = `export default ${JSON.stringify(showsData, null, 2)};`;

    fs.writeFile(filePath, newData, err => {
        if (err) {
            console.error('Error writing file:', err);
            return res.status(500).json({ error: 'Error saving data.' });
        }

        res.status(200).json({
            message: `Deleted ${propertyname} property from all shows.`,
        });
    });
});

// POST request to add a property to a specific show
router.post('/:showtitle/:propertyname', (req, res) => {
    const { showtitle, propertyname } = req.params;
    const { propertyValue } = req.body;

    if (!showtitle || !propertyname || !propertyValue) {
        return res.status(400).json({ error: 'Show title, property name, and value are required.' });
    }

    const showToUpdate = showsData.series.find(show => show.title === showtitle);

    if (!showToUpdate) {
        return res.status(404).json({ error: `Show with title '${showtitle}' not found.` });
    }

    showToUpdate[propertyname] = propertyValue;

    const __filename = fileURLToPath(import.meta.url);
    const filePath = path.resolve(path.dirname(__filename), '../../data/shows.js');
    const newData = `export default ${JSON.stringify(showsData, null, 2)};`;

    fs.writeFile(filePath, newData, err => {
        if (err) {
            console.error('Error writing file:', err);
            return res.status(500).json({ error: 'Error saving data.' });
        }

        res.status(200).json({
            message: `Added ${propertyname} property with value ${propertyValue} to show '${showtitle}'.`,
        });
    });
});

export default router;
