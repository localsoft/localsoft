import { Layout } from 'antd'
import { ReactNode } from 'react'
import Head from 'next/head'
import Sider from './Sider'

export interface PageProps {
	authenticated: boolean
	children: ReactNode
	title: string
}

export default function Page ({ authenticated, children, title }: PageProps) {
	return (
		<>
			<Head>
				<title>{title} • localsoft</title>
			</Head>
			<Layout style={{ minHeight: '100vh' }}>
				{authenticated && <Sider />}
				<Layout>
					<Layout.Content>
						{children}
					</Layout.Content>
				</Layout>
			</Layout>
		</>
	)
}