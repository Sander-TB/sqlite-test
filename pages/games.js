import Layout from "../components/Layout/Layout";
import axios from "axios";
import { BASE_URL } from "../constants/api";

export default function OldGames({ games }) {
	return (
		<Layout>
			<h1>Games</h1>
			{games
				? games.map((game) => {
						return (
							<div key={game.slug}>
								<a
									style={{ display: "block" }}
									key={games}
									href={`games/${game.slug}`}>
									<h1>{game.name}</h1>
									<img
										src={game.image}
										alt={game.name}
										style={{ width: 500 }}
									/>
								</a>
							</div>
						);
				  })
				: "Loading..."}
		</Layout>
	);
}

export async function getStaticProps() {
	let games = [];

	try {
		const res = await axios.get(BASE_URL);
		games = res.data.data;
	} catch (e) {
		console.log(e);
	}
	return {
		props: {
			games: games,
		},
	};
}
