import express, { urlencoded } from "express";
import handlebars from "express-handlebars";

import routes from "./routes.js";

// * Initializing express server
const app = express();

// * Setting up the view engine using Handlebars and setting the extension to be .hbs
app.engine(
	"hbs",
	handlebars.engine({
		extname: "hbs",
	})
);

// * Makes sure when I make a post request and needing the data from a form I get back an object from req.body
app.use(express.urlencoded({ extended: false }));

// * Setting the server to use hbs for its view engine
app.set("view engine", "hbs");

// * Setting so the server to looks for the views inside /src/views
app.set("views", "./src/views");

// * Search for static files in the folder public in case it finds it there
app.use(express.static("public"));

// * Using routes from the routes.js file
app.use(routes);

// * Starting the server to listen to port 5000 and making sure it works
app.listen(5000, () => console.log("Server is listening on http://localhost:5000..."));
