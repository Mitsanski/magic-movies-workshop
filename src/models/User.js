import {model, Schema} from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    email: String,
    password: String,
});

userSchema.pre('save', async function () {
    // TODO: Hash Password
    this.password = await bcrypt.hash(this.password, 10);
})
const User = model('User', userSchema);

export default User;
