import { Router } from "express";
import movieServices from "../services/movieServices.js";

// * Initializing the router for home routes
const router = Router();



router.get("/", async (req, res) => {
    const movies = await movieServices.getAll();
	res.render("home", { movies });
});

router.get("/about", (req, res) => {
	res.render("home/about");
});


export default router;
