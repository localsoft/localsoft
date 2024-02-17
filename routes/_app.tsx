import { type PageProps } from "$fresh/server.ts"

export default function App({ Component }: PageProps) {
	return (
		<html>
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>localsoft</title>
				<link rel="stylesheet" href="/styles.css" />
				<link rel="stylesheet" href="/ls-button.css" />
				<link rel="stylesheet" href="/ls-form.css" />
				<link rel="stylesheet" href="/ls-table.css" />
				<link rel="stylesheet" href="/ls-select.css" />
			</head>
			<body>
				<Component />
			</body>
		</html>
	)
}
