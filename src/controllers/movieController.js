import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();

// * URL: /movies/create
movieController.get("/create", (req, res) => {
	res.render("movies/create");
});

movieController.post("/create", async (req, res) => {
	const movieData = req.body;

	await movieService.create(movieData);

	res.redirect("/");
});

movieController.get("/:movieId/details", async (req, res) => {
	const movieId = req.params.movieId;

	const movie = await movieService.getSingleMovie(movieId).lean();
	const ratingString = getRatingViewData(movie.rating);
	res.render("movies/details", { movie, ratingString });
});

movieController.get("/search", async (req, res) => {
	const searchQuery = req.query;
	const movies = await movieService.getAll(searchQuery);

	res.render("movies/search", { movies, searchQuery });
});

movieController.get("/:movieId/attach", async (req, res) => {
	const movie = await movieService.getSingleMovie(req.params.movieId).lean();
	const casts = movie.casts;
	console.log(casts);
	res.render("movies/attach", { movie, casts });
});

function getRatingViewData(rating) {
	return "&#x2605;".repeat(rating);
}

export default movieController;
