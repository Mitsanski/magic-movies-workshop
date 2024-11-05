import uniqid from "uniqid";
import movieData from "../data/movieData.js";

const getAll = () => movieData.getAll();

const create = (movie) => {
	movie.id = uniqid();
	movie.rating = Number(movie.rating);

	return movieData.create(movie);
};

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
