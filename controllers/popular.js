import { movies } from '../movies.js';

export const mostPopularMovie = (req, res) => {
    res.send('this is the most popular movie');
    // const sortedMovies = movies.sort((a, b) => parseFloat(b.views) - parseFloat(a.views)); // Sort movies by views in descending order

    // const popular = [];

    // for (const movie in movies) {
    //     popular.push(movie)
    // }

    // res.send(sortedMovies);
}