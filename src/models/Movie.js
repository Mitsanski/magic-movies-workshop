import { Schema, model, Types } from "mongoose";

const movieSchema = new Schema({
	title: {
		type: String,
		required: true,
		minLength: [5, "Movie title should be at least 5 characters long"],
	},
	genre: {
		type: String,
		required: true,
		minLength: [5, "Genre should be at least 5 characters long"],
		lowercase: true,
	},
	director: {
		type: String,
		required: true,
		minLength: [5, "Director name should be at least 5 characters long"],
	},
	year: {
		type: Number,
		required: true,
		min: [1900, "Movie year should be between 1900 and 2024"],
		max: [2024, "Movie year should be between 1900 and 2024"],
	},
	imageUrl: {
		type: String,
		required: true,
		minLength: [20, "Movie image url should be at least 5 characters long"],
	},
	rating: {
		type: Number,
		required: true,
		min: [1, "Movie rating should be between 1 and 5 "],
		max: [5, "Movie rating should be between 1 and 5 "],
	},
	description: {
		type: String,
		required: true,
		minLength: [20, "Movie description should be at least 20 characters long"],
	},
	casts: [
		{
			type: Types.ObjectId,
			ref: "Cast",
		},
	],
});

const Movie = model("Movie", movieSchema);

export default Movie;
