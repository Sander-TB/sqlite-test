const openDB = require("../../db");

export default async function getOrdersByUserId(req, res) {
	if (req.method === "GET") {
		try {
			let usersOrders = [];
			const db = await openDB();
			usersOrders = await db.all("SELECT * FROM orders WHERE userID = ?", [
				req.query.id,
			]);
			db.close();
			res.json(usersOrders);
		} catch (error) {
			console.log(error);
		}
	}
}
