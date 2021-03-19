const openDB = require("../../db");

export default async function getUserById(req, res) {
	try {
		if (req.method === "GET") {
			let user = {};
			const db = await openDB();
			user = await db.get("SELECT * FROM users WHERE id= ?", [req.query.id]);
			db.close();
			res.json(user);
		}
	} catch (error) {
		console.log(error);
	}
}
