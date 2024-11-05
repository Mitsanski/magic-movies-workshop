import express from "express";
import handlebars from 'express-handlebars';

// * Initializing express server
const app = express();

// * Setting up the view engine using Handlebars and setting the extension to be .hbs
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

// * Setting the server to use hbs for its view engine
app.set('view engine', 'hbs');

// * Setting so the server to looks for the views inside /src/views
app.set('views', './src/views')

// * Default route for home for example
app.get("/", (req, res) => {
	res.render("index");
});

// * Starting the server to listen to port 5000 and making sure it works
app.listen(5000, () => console.log("Server is listening on http://localhost:5000..."));
