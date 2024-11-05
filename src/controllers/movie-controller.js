import { Router } from "express";
import movieServices from "../services/movieServices.js";
import castServices from "../services/castServices.js";

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

function toArray(documents) {
	return documents.map((document) => document.toObject());
}

// * Searches a movie based on a query
router.get("/search", async (req, res) => {
	const filter = req.query;
	const movies = await movieServices.getAll(filter);

	// * Renders the home page again but in case its a search request it give it isSearch and if true shows the search form
	res.render("home", { isSearch: true, movies: toArray(movies), filter });
});

// * Gets the id of the movie and shows the details of the moive
router.get("/:movieId/details", async (req, res) => {
	const movieId = req.params.movieId;
	const movie = await movieServices.getOne(movieId).lean();
	console.log(movie.casts);


	// * Prepare view data
	movie.ratingView = getRatingStars(Number(movie.rating));
	res.render("movies/details", { movie });
});

router.get("/:movieId/attach", async (req, res) => {
	const movie = await movieServices.getOne(req.params.movieId).lean();
	const casts = await castServices.getAll().lean();

	res.render("movies/attach", { movie, casts });
});

router.post("/:movieId/attach", async (req, res) => {
	const movieId = req.params.movieId;
	const castId = req.body.cast;

	await movieServices.attach(movieId, castId);

	res.redirect(`/movies/${movieId}/details`);
});

// * Function that the rating of the movie and converts it into stars string
function getRatingStars(stars) {
	if (!Number.isInteger(stars)) {
		return "n\\a";
	}
	return "&#x2605".repeat(stars);
}

export default router;
