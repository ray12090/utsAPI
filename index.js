import express from 'express';
import bodyParser from 'body-parser';

import moviesRoutes from './routes/movies.js'; 

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/movies', moviesRoutes);

app.get('/', (req, res) => {
    res.send('This is homepage, go to /movies to see the movies');
});

app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));