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

        const user = {
            _id: decodedToken._id,
            email: decodedToken.email,
        }

        req.user = user;
        req.isAuthenticated = true;
        res.locals = {
            userId: user.id,
            email: user.email,
            isAuthenticated: true
        };

        return next();
    } catch (err) {
        res.clearCookie('auth');

        res.redirect('/auth/login');
    }

    // TODO: Add user data to request
}

export const isAuth = (req, res, next) => {
    if (!req.isAuthenticated){
        return res.status(401).redirect('/auth/login');
    }
}