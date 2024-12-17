import { Router } from "express";
import castService from "../services/castService.js";

const castController = Router();

castController.get("/create", (req, res) => {
	res.render("cast/create");
});

castController.post("/create", async (req, res) => {
	const cast = req.body;

	await castService.create(cast);

	res.redirect("/");
});

export default castController;
