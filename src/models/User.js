import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const Salt_Rounds = 10;

const userSchema = new Schema({
	email: String,
	password: String,
});


// hash password before save
userSchema.pre("save", async function () {

	const hash = await bcrypt.hash(this.password, Salt_Rounds);
	this.password = hash;
});

const User = model("User", userSchema);

export default User;
