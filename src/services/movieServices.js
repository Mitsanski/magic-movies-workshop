import Movie from "../models/Movie.js";

// * Getting all movies but if there is a filter it filters them down. That is in case of /search
const getAll = async (filter = {}) => {
	let movies = await Movie.find();
	if (filter.search) {
		movies = movies.filter((movie) =>
			movie.title.toLowerCase().includes(filter.search.toLowerCase())
		);
	}

	if (filter.genre) {
		movies = movies.filter(
			(movie) => movie.genre.toLowerCase() == filter.genre.toLowerCase()
		);
	}
	if (filter.year) {
		movies = movies.filter((movie) => movie.year == filter.year);
	}

	return movies;
};

// * Creating a movie
const create = (movie) => Movie.create(movie);

// * Getting just one movie based on movie id
const getOne = async (movieId) => Movie.findById(movieId);

export default {
	getAll,
	create,
	getOne,
};
