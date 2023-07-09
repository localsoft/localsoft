import { Button, Form, Input, Layout } from "antd"
import { ReactNode, useState } from "react"
import InternalLayoutHeaderTitle from "./internal/InternalLayoutHeaderTitle"
import InternalNavigationMenu from "./InternalNavigationMenu"
import { ShakeOutlined } from "@ant-design/icons"

export interface Props {
	children: ReactNode
	title: string
}

export default function InternalLayout({ children, title }: Props) {
	const [collapsed, setCollapsed] = useState<boolean>(false)
	const onCollapse = (nextState: boolean) => setCollapsed(nextState)
	const theme = 'light'

	return (
		<Layout style={{ height: '100%' }}>
			<Layout.Header style={{ color: 'white', padding: 0 }}>
				<InternalLayoutHeaderTitle collapsed={collapsed} />
				<Input placeholder='Search' />
				<Button icon={<ShakeOutlined />} shape='circle' size='large' />
			</Layout.Header>
			<Layout>
				<Layout.Sider collapsed={collapsed} collapsible onCollapse={onCollapse} theme={theme}>
					<InternalNavigationMenu />
				</Layout.Sider>
				<Layout.Content>
					{children}
				</Layout.Content>
			</Layout>
		</Layout>
	)
}
