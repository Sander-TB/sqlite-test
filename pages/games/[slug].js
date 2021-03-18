import Layout from "../../components/Layout/Layout";
import { BASE_URL } from "../../constants/api";
import axios from "axios";

export default function Game({ game }) {
	return (
		<Layout>
			<h1>{game.name}</h1>
			<img src={game.image} alt={game.name} style={{ width: 500 }} />
			<p>Rating: {game.rating}</p>
			<p>Released: {game.released ? game.released : "Unknown"}</p>
		</Layout>
	);
}

export async function getStaticPaths() {
	try {
		const res = await axios.get(BASE_URL);
		const games = res.data.data;
		const paths = games.map((game) => ({
			params: { slug: game.slug },
		}));
		return { paths, fallback: false };
	} catch (e) {
		console.log(e);
	}
}

export async function getStaticProps({ params }) {
	const url = `${BASE_URL}/${params.slug}`;

	let game = null;

	try {
		const res = await axios.get(url);
		game = res.data;
	} catch (e) {
		console.log(e);
	}
	return {
		props: {
			game: game,
		},
	};
}
