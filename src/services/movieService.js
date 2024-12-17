import Movie from "../models/Movie.js";

const getAll = async (filter = {}) => {
	let query = await Movie.find().lean();

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
const getSingleMovie = (id) => Movie.findById(id);

const create = (movie) => Movie.create(movie);

export default {
	getAll,
	create,
	getSingleMovie,
};
