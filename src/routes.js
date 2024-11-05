import { Router } from "express";

// * Importing controllers
import homeController from "./controllers/home-controller.js";

// * Creating new router
const router = Router();

// * Telling the app the imported controller
router.use(homeController);

// * Exporting the router into the index file
export default router;
