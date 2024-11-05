import uniqid from "uniqid";
import movieData from "../data/movieData.js";

// * Getting all movies but if there is a filter it filters them down. That is in case of /search
const getAll = async (filter = {}) => {
	let movies = await movieData.getAll();

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
const create = (movie) => {
	movie.id = uniqid();
	movie.rating = Number(movie.rating);

	return movieData.create(movie);
};


// * Getting just one movie based on movie id
const getOne = async (id) => {
	const movies = await getAll();

	const movie = movies.find((x) => x._id == id);

	return movie;
};

export default {
	getAll,
	create,
	getOne,
};
