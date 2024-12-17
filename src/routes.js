import { Router } from "express";

import homeController from "./controllers/homeController.js";
import movieController from "./controllers/movieController.js";
import castController from "./controllers/castController.js";

const router = Router();

// * Router Controllers
router.use(homeController);
router.use("/movies", movieController);
router.use("/casts", castController);
router.all("*", (req, res) => {
	res.render("home/404");
});

export default router;
