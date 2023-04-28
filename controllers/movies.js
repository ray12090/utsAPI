const movies = [
    {
        "id": "1",
        "title": "Joker",
        "genre": "Drama",
        "year": "2019"
    },
    {
        "id": "2",
        "title": "Avengers: Endgame",
        "genre": "Action",
        "year": "2019"
    },
    {
        "id": "3",
        "title": "John Wick: Chapter 3 - Parabellum",
        "genre": "Action",
        "year": "2023"
    }
];

export const getMovies = (req, res) => {
    res.send(movies);
}

export const addMovie = (req, res) => {
    const movie = req.body;

    movies.push({ ...movie});

    res.send(`movie with the name "${movie.title}" added to the database!`);
}

export const getMoviebyID = (req, res) => {
    const { id } = req.params;

    const foundMoviebyID = movies.find((movie) => movie.id === id);

    res.send(foundMoviebyID);
}

export const getMoviebyTitle = (req, res) => {
    const { title } = req.params;

    const foundMoviebyTitle = movies.filter((movie) => movie.title.includes(title));
    
    res.send(foundMoviebyTitle);
}

export const getMoviebyYear = (req, res) => {
    const { movieYear } = req.params;

    const matchingMovies = [];

    for (const movie of movies) {
        if (movie.year === movieYear) {
            matchingMovies.push(movie);
        }
    }

    res.send(matchingMovies);
}

export const updateMovie = (req, res) => {
    const { id } = req.params;

    const { title, genre, year } = req.body;

    const movie = movies.find((movie) => movie.id === id);
    
    if(title) movie.title = title;
    if(genre) movie.genre = genre;
    if(year) movie.year = year;

    res.send(`movie with the ID ${id} has been updated`);
}