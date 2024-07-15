import { Content } from 'antd/es/layout/layout'
import { HomeOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { ReactNode } from 'react'
import Sider from 'antd/es/layout/Sider'

export interface InternalLayoutProps {
	children: ReactNode
}

export default (props: InternalLayoutProps) => {
	const items = [{
		icon: <HomeOutlined />,
		label: 'Dashboard',
	}, {
		key: '/contacts',
		icon: <TeamOutlined />,
		label: 'Contacts',
	}, {
		icon: <SettingOutlined />,
		key: '/settings',
		label: 'Settings',
	}]

	return (
		<Layout className='full-height'>
			<Sider collapsible theme='light'>
				<h1>localsoft</h1>
				<Menu items={items} />
			</Sider>
			<Content>
				{props.children}
			</Content>
		</Layout>
	)
}