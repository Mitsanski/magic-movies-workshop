import { connect } from "mongoose";

const dbUrl = "mongodb://localhost:27017/magic-movies";
export default async function mongooseInit() {
	try {
		// ! This is top level await
		await connect(dbUrl);
		console.log("Connected to database");
	} catch (err) {
		throw new Error(err.message);
	}
}
