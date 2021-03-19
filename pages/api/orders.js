const openDB = require("../db");

export default async function orders(req, res) {
	if (req.method === "GET") {
		let allOrders = [];
		try {
			const db = await openDB();
			allOrders = await db.all("SELECT * FROM orders");
			db.close();
			res.json(allOrders);
		} catch (error) {
			console.log(error);
		}
	}
}
