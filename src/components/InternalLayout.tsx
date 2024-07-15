import { Content } from 'antd/es/layout/layout'
import { HomeOutlined, SettingOutlined } from '@ant-design/icons'
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
		icon: <SettingOutlined />,
		label: 'Settings',
	}]

	return (
		<Layout className='full-height'>
			<Sider collapsible theme='light'>
				<Menu items={items} />
			</Sider>
			<Content>
				{props.children}
			</Content>
		</Layout>
	)
}