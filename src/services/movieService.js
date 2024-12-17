import movieData from "../data/movieData.js";
import uniqid from "uniqid";

const getAll = () => movieData.getAll();
const getSingleMovie = (id) => movieData.getSingleMovie(id)
const create = (movie) => {
	movie.id = uniqid();
	return movieData.create(movie);
};

export default {
	getAll,
	create,
	getSingleMovie
};
