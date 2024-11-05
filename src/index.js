import express from "express";

import routes from "./routes.js";
import handlebarsInit from "./config/handlebarsInit.js";
import expressInit from "./config/expressInit.js";

// * Initializing express server
const app = express();

handlebarsInit(app);
expressInit(app);

// * Using routes from the routes.js file
app.use(routes);

// * Starting the server to listen to port 5000 and making sure it works
app.listen(5000, () => console.log("Server is listening on http://localhost:5000..."));
