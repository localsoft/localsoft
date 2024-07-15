import "./globals.css"
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "localsoft",
	description: "TODO",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AntdRegistry>
					{children}
				</AntdRegistry>
			</body>
		</html>
	);
}
