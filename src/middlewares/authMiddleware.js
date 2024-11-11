import jwt from 'jsonwebtoken';

export const authMiddleware = async (req, res, next) => {
    // TODO: Check if there is a token in the request
    const token = req.cookies['auth'];
    if (!token) {
        return next();
    }

    // TODO: Validate token
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decodedToken);
        // TODO: Add userdata to request
    } catch (err) {
        console.log(err)
        res.clearCookie('auth');

        res.redirect('/auth/login');
    }

    // TODO: Add user data to request
}