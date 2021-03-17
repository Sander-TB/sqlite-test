import Link from "next/Link";

export default function Header({ content }) {
	return (
		<nav className='app-header'>
			<span className='logo'>{content} | </span>
			<Link href='/'>Home | </Link>
			<Link href='/about'>About | </Link>
			<Link href='/games'>Old Games</Link>
		</nav>
	);
}
