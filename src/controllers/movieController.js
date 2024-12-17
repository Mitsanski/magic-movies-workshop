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

	const movie = await movieService.getSingleMovie(movieId);
	const ratingString = getRatingViewData(movie.rating);
	res.render("movies/details", { movie, ratingString });
});

movieController.get('/search', async (req, res) => {
	const movies = await movieService.getAll(req.query)

	res.render("movies/search", {movies})
})

function getRatingViewData(rating) {
	return "&#x2605;".repeat(rating);
}

export default movieController;
