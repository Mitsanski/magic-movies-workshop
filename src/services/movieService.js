import uniqid from "uniqid";
import movieData from "../data/movieData.js";

const getAll = async (filter = {}) => {
	let query = await movieData.getAll();

	if (filter.title) {
		query = query.filter((x) =>
			x.title.toLowerCase().includes(filter.title.toLowerCase())
		);
	}

	if (filter.genre) {
		query = query.filter((x) => x.genre.toLowerCase() == filter.genre.toLowerCase());
	}

	if (filter.year) {
		query = query.filter((x) => x.year == filter.year);
	}

	return query;
};
const getSingleMovie = (id) => movieData.getSingleMovie(id);
const create = (movie) => {
	movie.id = uniqid();
	return movieData.create(movie);
};

export default {
	getAll,
	create,
	getSingleMovie,
};
