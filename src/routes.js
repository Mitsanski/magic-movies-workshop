import { Router } from "express";

// * Importing controllers
import homeController from "./controllers/home-controller.js";
import movieController from "./controllers/movie-controller.js";
import castController from './controllers/cast-controller.js'

// * Creating new router
const router = Router();

// * Telling the app the imported controller
router.use(homeController);
// * Use the movie controller when the request starts with /movies
router.use("/movies", movieController);
// * Use the cast controller when the request starts with /casts
router.use("/casts", castController);

router.all("*", (req, res) => {
	res.render("404");
});

// * Exporting the router into the index file
export default router;
