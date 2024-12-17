import Movie from "../models/Movie.js";

const getAll = async (filter = {}) => {
	let moviesQuery = Movie.find().lean();

	if (filter.title) {
		moviesQuery.find({ title: { $regex: filter.title, $options: "i" } });
	}

	if (filter.genre) {
		moviesQuery.find({ genre: filter.genre.toLowerCase() });
	}

	if (filter.year) {
		moviesQuery.find({ year: filter.year });
		// moviesQuery.where("year").equals(filter.year);
	}

	return moviesQuery;
};
const getSingleMovie = (id) => Movie.findById(id).populate("casts");

const create = (movie) => Movie.create(movie);

const attach = (movieId, castId) => {
	return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
};

export default {
	getAll,
	create,
	getSingleMovie,
	attach,
};
