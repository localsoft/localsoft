import { FileOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { MenuItemType } from 'antd/es/menu/hooks/useItems'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PageSider () {
	const [collapsed, onCollapse] = useState<boolean>(true)
	const router = useRouter()

	const items: MenuItemType[] = [
		{ icon: <UserOutlined />, key: '/people', label: 'People' },
		{ icon: <FileOutlined />, key: '/files', label: 'Files' },
	]

	const onClick = (item: MenuItemType) =>
		router.push(item.key as string)

	return (
		<Layout.Sider collapsed={collapsed} collapsible onCollapse={onCollapse} theme='light'>
			<Menu items={items} onClick={onClick} />
		</Layout.Sider>
	)
}