import { Layout } from 'antd'
import { ReactNode } from 'react'
import Head from 'next/head'
import PageHeader from './PageHeader'
import PageSider from './PageSider'

export interface PageProps {
	children: ReactNode
	title: string
}

export default function Page ({ children, title }: PageProps) {
	return (
		<>
			<Head>
				<title>{title} • localsoft</title>
			</Head>
			<Layout style={{ minHeight: '100vh' }}>
				<PageSider />
				<Layout>
					<PageHeader />
					<Layout.Content>
						{children}
					</Layout.Content>
				</Layout>
			</Layout>
		</>
	)
}