import { Router } from "express";
import castService from "../services/castService.js";
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

movieController.get("/search", async (req, res) => {
	const searchQuery = req.query;
	const movies = await movieService.getAll(searchQuery);

	res.render("movies/search", { movies, searchQuery });
});

movieController.get("/:movieId/attach", async (req, res) => {
	const movie = await movieService.getSingleMovie(req.params.movieId).lean();
	const casts = await castService.getAll().lean();
	res.render("movies/attach", { movie, casts });
});

movieController.post("/:movieId/attach", async (req, res) => {
	const movieId = req.params.movieId;
	const castId = req.body.cast;

	await movieService.attach(movieId, castId);
	res.redirect(`/movies/${movieId}/details`);
});

movieController.get("/:movieId/details", async (req, res) => {
	const movieId = req.params.movieId;

	const movie = await movieService.getSingleMovie(movieId).lean();
	const casts = movie.casts;

	res.render("movies/details", { movie, casts });
});
export default movieController;
