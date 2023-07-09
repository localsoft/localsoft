import { Menu, MenuProps } from "antd"
import { ShakeOutlined } from "@ant-design/icons"

type MenuItem = Required<MenuProps>['items'][number]

export default function InternalNavigationMenu () {
	const items: MenuItem[] = [{
		icon: <ShakeOutlined />,
		key: 'dashboard',
		label: 'Dashboard',
	}, {
		icon: <ShakeOutlined />,
		key: 'files',
		label: 'Files'
	}, {
		icon: <ShakeOutlined />,
		key: 'people',
		label: 'People',
		children: [{
			key: 'people.users',
			label: 'Users',
		}],
	}, {
		icon: <ShakeOutlined />,
		key: 'website',
		label: 'Website',
		children: [{
			key: 'website-pages',
			label: 'Pages',
		}, {
			key: 'website-blog',
			label: 'Blog',
		}, {
			key: 'website-analytics',
			label: 'Analytics',
		}]
	}, {
		icon: <ShakeOutlined />,
		key: 'reporting',
		label: 'Reporting',
	}]

	return <Menu items={items} />
}