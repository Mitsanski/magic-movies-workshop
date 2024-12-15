import { Router } from "express";
import movieService from "../services/movie-service.js";

const homeController = Router();

homeController.get("/", async (req, res) => {
	const movies = await movieService.getAll();
	res.render("home", { movies });
});

homeController.get("/about", (req, res) => {
	res.render("home/about");
});

export default homeController;
