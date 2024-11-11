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
    res.redirect('/auth/login')
})

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('login', async (req, res) => {
    const {email, password} = req.body;
    const token = await authService.login(email, password)

    // TODO: Add token to cookie

    res.redirect('/')
})


export default router;