import { Router } from "express";
import movieServices from "../services/movieServices.js";

const router = Router();

// ! URL: /movies/create

router.get("/create", (req, res) => {
	// * It will look inside the view folder with the folder name movies and file create
	res.render("movies/create");
});

router.post("/create", async (req, res) => {
	const movieData = req.body;

	await movieServices.create(movieData);

	res.redirect("/");
});
router.get("/search", async (req, res) => {
	const filter = req.query;
	const movies = await movieServices.getAll(filter)
	res.render("home", { isSearch: true, movies, filter });
});



router.get("/:movieId/details", async (req, res) => {
	const movie = await movieServices.getOne(req.params.movieId);

	// * Prepare view data
	movie.ratingView = getRatingStars(Number(movie.rating));
	res.render("movies/details", { movie });
});

function getRatingStars(stars) {
	if (!Number.isInteger(stars)) {
		return "n\\a";
	}
	return "&#x2605".repeat(stars);
}

export default router;
