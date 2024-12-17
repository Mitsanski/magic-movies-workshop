import { connect } from "mongoose";

const dbUrl = "mongodb://localhost:27017/magic-movies";
export default async function mongooseInit() {
	try {
		await connect(dbUrl);
		console.log("Succesfully connected to db!");
	} catch (err) {
		console.error("Cannot connect to DB!" + err.message);
	}
}
