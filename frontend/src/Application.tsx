import { Layout } from 'antd'

export default function Application () {
	return (
		<Layout>
			<Layout.Sider>Sider</Layout.Sider>
			<Layout>
				<Layout.Header>Header</Layout.Header>
				<Layout.Content>Content</Layout.Content>
				<Layout.Footer>Footer</Layout.Footer>
			</Layout>
		</Layout>
	)
}