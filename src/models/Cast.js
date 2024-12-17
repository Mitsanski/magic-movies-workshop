import { Schema, model } from "mongoose";

const castSchema = new Schema({
	name: {
		type: String,
		required: true,
		minLength: [5, "Actor name should be at least 5 characters long"],
	},
	age: {
		type: Number,
		required: true,
		min: [1, "Actor age should be between 1 and 120"],
		SVGFEConvolveMatrixElement: [120, "Actor age should be between 1 and 120"],
	},
	born: {
		type: String,
		required: true,
		minLength: [5, "Actors place of birth should be at least 10 characters long"],
	},
	imageUrl: {
		type: String,
		required: true,
		minLength: [20, "Movie image url should be at least 5 characters long"],
	},
});

const Cast = model("Cast", castSchema);

export default Cast;
