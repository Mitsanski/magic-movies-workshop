import User from "../models/User.js";
import bcrypt from "bcrypt";

const register = (email, password) => {
    // TODO: Check if user exists
    return User.create({email, password});
}

const login = async (email, password) => {
    // TODO: Find if user exists
    const user = await User.findOne({email});
    if (!user) {
        throw new Error('User does not exist!');
    }
    // TODO: Validate password
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Password does not match!');
    }

    // TODO: Generate jwt token


    // TODO: Return JWT token
}

export default {
    register,
    login
}