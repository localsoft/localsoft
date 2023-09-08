import { Layout } from 'antd'
import { useState } from 'react'

export default function PageSider () {
	const [collapsed, onCollapse] = useState<boolean>(true)

	return (
		<Layout.Sider collapsed={collapsed} collapsible onCollapse={onCollapse}>
			Sider
		</Layout.Sider>
	)
}