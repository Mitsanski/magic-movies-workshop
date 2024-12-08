import {Router} from "express";
import authService from '../services/authService.js'

const router = Router();

// ! Register get
router.get('/register', (req, res) => {
    res.render('auth/register');
});

// ! Register post
router.post('/register', async (req, res) => {
    const {email, password, rePassword} = req.body;

    await authService.register(email, password)
    const token = await authService.login(email, password);

    res.cookie('auth', token, {httpOnly: true});

    res.redirect('/')
})

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const token = await authService.login(email, password);

    // TODO: Add token to cookie
    res.cookie('auth', token, {httpOnly: true})

    res.redirect('/')
})

router.get('/logout', (req, res) => {
    res.clearCookie('auth');

    // Token invalidation

    res.redirect('/')
})


export default router;