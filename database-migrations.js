const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

async function setup() {
	try {
		const db = await sqlite.open({
			filename: "./games.sqlite",
			driver: sqlite3.Database,
		});

		// run migrations to create the table in the DB
		await db.migrate();
	} catch (error) {
		console.error(error);
	}
}

setup();
