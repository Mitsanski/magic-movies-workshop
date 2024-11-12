import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from '../lib/jwt.js'


const register = async (email, password, rePassword) => {
    const userCount = await User.countDocuments({email});

    if (userCount > 0){
        throw new Error("User already exists");
    }
    // TODO: Check if user exists
    return User.create({email, password, rePassword});
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

    // * Generate jwt token
    const payload = {_id: user._id, email}

    // * Return JWT token
    return await jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '2h'})

}

export default {
    register,
    login
}