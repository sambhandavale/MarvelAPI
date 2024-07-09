import express from 'express';
import cors from 'cors';

import showsRouter from './routes/shows.js';
import moviesRouter from './routes/movies.js';

const app = express();
const port = 5000;

// const validApiKey = '1234';

// // to use the API add a parameter apiKey=1234 to the route 

// const validateApiKey = (req, res, next) => {
//     const apiKey = req.headers['myKey'] || req.query.apiKey;

//     if (!apiKey || apiKey !== validApiKey) {
//         return res.status(401).json({ error: 'Unauthorized. Invalid API key.' });
//     }
//     next();
// };

// app.use('/api', validateApiKey);

app.use(express.json());
app.use(cors());

app.use('/api/shows', showsRouter);
app.use('/api/movies', moviesRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
