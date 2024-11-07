import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = (email, password) => {
	// TODO: Check if user exists
	return User.create({ email, password });
};

const login = async (email, password) => {
	// TODO: check if user exists
	const user = await User.findOne({ email });

	if (!user) {
		throw new Error("User does not exist");
	}

	// TODO: validate password
	const isValid = await bcrypt.compare(password, user.password);

	if (!isValid) {
		throw new Error("Password does not match");
	}

	// TODO: Generate jwt token
	const payload = { _id: user._id, email };
	const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });

	// TODO: Return jwt token
	return token;
};

export default {
	register,
	login,
};
