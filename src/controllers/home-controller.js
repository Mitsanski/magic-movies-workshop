import {Router} from "express";

// * Initializing the router for home routes
const router = Router();

router.get("/", (req, res) => {
	res.render("home");
});

router.get('/about', (req, res) => {
    res.render('home/about')
})

router.get('*', (req, res) => {
    res.render('home/404')   
})


export default router;