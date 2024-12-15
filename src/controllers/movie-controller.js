import { Router } from "express";

const movieController = Router();

// * URL: /movies/create
movieController.get("/create", (req, res) => {
	res.render("movies/create");
});

movieController.post("/create", (req, res) => {
	console.log(req);
	res.send("hello");
});

export default movieController;
