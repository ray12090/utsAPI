import express from 'express';
import { getMovies, addMovie, getMoviebyID, getMoviebyTitle, getMoviebyYear, updateMovie } from '../controllers/movies.js';

const router = express.Router();

router.get('/', getMovies);

router.post('/', addMovie);

router.get('/:id', getMoviebyID);

router.get('/title/:title', getMoviebyTitle);

router.get('/year/:movieYear', getMoviebyYear);

router.patch('/:id', updateMovie);

export default router;