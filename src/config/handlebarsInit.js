import handlebars from "express-handlebars";

export default function handlebarsInit(app) {
	// * View engine setup
	app.engine(
		"hbs",
		handlebars.engine({
			extname: "hbs",
		})
	);
	app.set("view engine", "hbs");
	app.set("views", "./src/views");
}
