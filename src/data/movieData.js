import fs from "fs/promises";
import path from "path";

async function getDb() {
	const dbPath = path.resolve("./src/db.json");
	const db = await fs.readFile(dbPath, { encoding: "utf8" });
	const data = JSON.parse(db);
	return data;
}

async function getMovies(data) {
	const db = await getDb();
	return db.movies;
}

export default {
	getMovies,
};
