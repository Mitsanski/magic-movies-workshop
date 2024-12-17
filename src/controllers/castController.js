import { Router } from "express";

const castController = Router();

castController.get("/create", (req, res) => {
	const castData = req.body;
	res.render("casts/create", { cast: castData });
});

export default castController;
