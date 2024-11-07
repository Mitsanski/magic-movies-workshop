import { Router } from "express";
import castService from "../services/castService.js";

const router = Router();
router.post('/create', async (req, res) => {
    const cast = req.body;

    await castService.create(cast);

    res.redirect('/');
});

router.get('/create', (req, res) => {
    res.render('cast/create');
});


export default router;
