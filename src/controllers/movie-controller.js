import { Router } from "express";

import castServices from "../services/castServices.js";
import movieServices from "../services/movieServices.js";

const router = Router();

// URL: /movies/create
router.get("/create", (req, res) => {
	res.render("movies/create");
});

router.post("/create", async (req, res) => {
	const movieData = req.body;

	await movieServices.create(movieData);

	res.redirect("/");
});

router.get("/search", async (req, res) => {
	const filter = req.query;
	const movies = await movieServices.getAll(filter).lean();

	res.render("home", { isSearch: true, movies, filter });
});

router.get("/:movieId/details", async (req, res) => {
	const movieId = req.params.movieId;
	const movie = await movieServices.getOne(movieId).lean();

	res.render("movies/details", { movie });
});

router.get("/:movieId/attach", async (req, res) => {
	const movie = await movieServices.getOne(req.params.movieId).lean();
	const casts = await castServices.getAllWithout(movie.casts).lean();

	res.render("movies/attach", { movie, casts });
});

router.post("/:movieId/attach", async (req, res) => {
	const movieId = req.params.movieId;
	const castId = req.body.cast;
	const character = req.body.character;

	await movieServices.attach(movieId, castId, character);

	res.redirect(`/movies/${movieId}/details`);
});

// Deprecated
function toArray(documents) {
	return documents.map((document) => document.toObject());
}

export default router;
