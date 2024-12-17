import express from "express";
import handlebars from "express-handlebars";
import handlebarsInit from "./config/handlebarsInit.js";

import routes from "./routes.js";
import expressInit from "./config/expressInit.js";

const app = express();

handlebarsInit(app);
expressInit(app);

app.use(routes);

app.listen(5000, () => console.log(`Server is listening on http://localhost:5000...`));
