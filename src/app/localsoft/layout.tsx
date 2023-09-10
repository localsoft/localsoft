'use client';
import { ItemType } from 'antd/es/menu/hooks/useItems'
import { Layout, Menu, MenuTheme, Typography } from 'antd'
import React, { ReactNode, useState } from 'react'
import { AntDesignOutlined, DashboardOutlined } from '@ant-design/icons';

const items: ItemType[] = [{
	icon: <DashboardOutlined />,
	key: 'Dashboard',
	label: 'Dashboard',
	title: 'Dashboard',
}]

export interface Props {
	children: ReactNode
}

export default ({ children }: Props) => {
	const [collapsed, onCollapse] = useState<boolean>(true)
	const theme: MenuTheme = 'light'

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Layout.Sider collapsed={collapsed} collapsible onCollapse={onCollapse} theme={theme} width={250}>
				<header style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
					{!collapsed && <Typography.Title style={{ margin: 0 }}><AntDesignOutlined /> LocalSoft</Typography.Title>}
					{collapsed && <Typography.Title style={{ margin: 0 }}><AntDesignOutlined /></Typography.Title>}
				</header>
				<Menu items={items} theme={theme} />
			</Layout.Sider>
			<Layout.Content>
				<header style={{ display: 'flex', padding: '1rem' }}>
					<Typography.Title style={{ margin: 0 }}>Dashboard</Typography.Title>
				</header>
				{children}
			</Layout.Content>
		</Layout>
	)
}
