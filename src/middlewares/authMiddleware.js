import jwt from 'jsonwebtoken';

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies['auth'];
    if (!token) {
        return next();
    }

    // TODO: Validate token
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        // TODO: Add userdata to request

        req.user = {
            _id: decodedToken._id,
            email: decodedToken.email,
        }
        return next();
    } catch (err) {
        console.log(err)
        res.clearCookie('auth');

        res.redirect('/auth/login');
    }

    // TODO: Add user data to request
}