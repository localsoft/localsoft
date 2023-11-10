import { 
	CalendarOutlined,
	HomeOutlined, 
	SettingOutlined
} from "@ant-design/icons"
import { Menu } from "antd"
import { SelectInfo } from "antd/es/calendar/generateCalendar"
import { MenuItemType } from "antd/es/menu/hooks/useItems"
import { useNavigate } from "react-router-dom"

const items: MenuItemType[] = [{
	icon: <HomeOutlined />,
	key: '/',
	label: 'Dashboard',
	title: 'Dashboard',
}, { 
	icon: <CalendarOutlined />, 
	key: '/calendar',
	label: 'Calendar',
	title: 'Calendar',
}, {
	icon: <SettingOutlined />,
	key: '/settings',
	label: 'Settings',
	title: 'Settings',
}] 

export default function Navigation () {
	const navigate = useNavigate()

	const onSelect = ({ key }: any) => {
		const item = items.find(i => i.key === key)
		if (item) {
			document.title = `${item.title} • LocalSoft`
			navigate(key)
		}
	}

	return <Menu items={items} onSelect={onSelect} theme='light' />
}