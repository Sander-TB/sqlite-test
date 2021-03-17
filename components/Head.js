import NextHead from "next/head";

export default function Head({
	title = "default value",
	description,
	author,
	keywords,
}) {
	return (
		<NextHead>
			<title>{title ? title : "some default value"}</title>
			<link rel='icon' href='/favicon.ico' />
			<meta name='description' description={description} />
			<meta name='author' author={author} />
			<meta name='keywords' content={keywords} />
		</NextHead>
	);
}
