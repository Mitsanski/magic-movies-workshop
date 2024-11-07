import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const authMiddleware = async (req, res, next) => {
	// TODO: Check if theere is a token in the request
	const token = req.cookies["auth"];

	if (!token) {
		return next();
	}

	// TODO: Validate token
	try {
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
		console.log(decodedToken);

		return next();
	} catch (error) {
		// TODO: Invalid token
	}

	// TODO: Add user data to request
};
