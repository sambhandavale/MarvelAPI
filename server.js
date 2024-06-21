import express from 'express';
import cors from 'cors';

import showsRouter from './routes/shows.js';
import moviesRouter from './routes/movies.js';

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use('/api/shows', showsRouter);
app.use('/api/movies', moviesRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
