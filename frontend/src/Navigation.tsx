import { 
	CalendarOutlined, 
	HomeOutlined 
} from "@ant-design/icons"
import { Menu } from "antd"
import { MenuItemType } from "antd/es/menu/hooks/useItems"
import { useNavigate } from "react-router-dom"

const items: MenuItemType[] = [{
	icon: <HomeOutlined />,
	key: '/',
	label: 'Dashboard',
	title: 'Dashboard',
},{ 
	icon: <CalendarOutlined />, 
	key: '/calendar',
	label: 'Calendar',
	title: 'Calendar',
}] 

export default function Navigation () {
	const navigate = useNavigate()

	const onSelect = (event: any) =>
		navigate(event.key)

	return <Menu items={items} onSelect={onSelect} theme='light' />
}