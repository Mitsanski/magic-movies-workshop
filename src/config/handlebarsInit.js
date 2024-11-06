import handlebars from "express-handlebars";

export default function handlebarsInit(app) {
	// * Setting up the view engine using Handlebars and setting the extension to be .hbs
	app.engine(
		"hbs",
		handlebars.engine({
			extname: "hbs",
			helpers: {
				// ! When you generate helpers they should be in another file and declared in the engine
				rating: function (rating) {
					if (!Number.isInteger(rating)) {
						return "n\\a";
					}
					return "&#x2605".repeat(rating);
				},
			},
		})
	);

	// * Setting the server to use hbs for its view engine
	app.set("view engine", "hbs");

	// * Setting so the server to looks for the views inside /src/views
	app.set("views", "./src/views");
}
