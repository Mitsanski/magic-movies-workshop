import express from "express";

export default function expressInit(app) {
	// * Makes sure when I make a post request and needing the data from a form I get back an object from req.body
	app.use(express.urlencoded({ extended: false }));

	// * Search for static files in the folder public in case it finds it there
	app.use(express.static("public"));
}
