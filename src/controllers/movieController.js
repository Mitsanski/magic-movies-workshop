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
	res.render("movies/details", { movie });
});

export default movieController;
