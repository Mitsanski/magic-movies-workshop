import { Router } from "express";

import castController from "./controllers/cast-controller.js";
import homeController from "./controllers/home-controller.js";
import movieController from "./controllers/movie-controller.js";
import authController from "./controllers/auth-controller.js";

const router = Router();

router.use(homeController);
router.use("/movies", movieController);
router.use("/casts", castController);
router.use("/auth", authController);

router.all("*", (req, res) => {
	res.render("404");
});

export default router;
