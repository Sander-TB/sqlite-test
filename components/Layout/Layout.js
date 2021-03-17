import Head from "../../components/Head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
	return (
		<>
			<Head
				title='Games For You'
				description='A fancy website for you'
				author='Sander Trollebø'
				keywords='news, js'
			/>
			<Header content='News for you' />

			<div>{children}</div>
		</>
	);
}
