import { Router } from "express";

import homeController from "./controllers/home-controller.js";
import movieController from "./controllers/movie-controller.js";

const router = Router();

// * Router Controllers
router.use(homeController);
router.use("/movies", movieController);

export default router;
