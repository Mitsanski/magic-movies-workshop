import fs from "fs/promises";
import path from "path";

const dbPath = path.resolve("./src/database.json");

async function getDb() {
	const db = await fs.readFile(dbPath, "utf-8");
	const data = JSON.parse(db);

	return data;
}

async function saveDb(data) {
	return fs.writeFile(dbPath, JSON.stringify(data, {}, 2));
}

async function getAll() {
	const db = await getDb();
	return db.movies;
}

async function create(movieData) {
	const db = await getDb();

	db.movies.push(movieData);

	return saveDb(db);
}

export default {
	getAll,
	create,
};
