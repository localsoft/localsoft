import { Button, Space, Tooltip, Typography } from "antd"
import { PlusOutlined, QuestionOutlined, SettingOutlined } from "@ant-design/icons"

export interface Props {
	onClick: (type: string) => void
	title: string
}

export default function PageHeader ({ onClick, title }: Props) {
	return (
		<header style={{ alignItems: 'center', display: "flex", justifyContent: 'space-between', padding: '1rem' }}>
			<Typography.Title style={{ margin: 0 }}>{title}</Typography.Title>
			<Space>
				<Tooltip title='Create'>
					<Button icon={<PlusOutlined />} onClick={() => onClick('plus')} shape='circle' size='large' />
				</Tooltip>
				<Tooltip title='Settings'>
					<Button icon={<SettingOutlined />} onClick={() => onClick('settings')} shape='circle' size='large' />
				</Tooltip>
				<Tooltip title='Help'>
					<Button icon={<QuestionOutlined />} onClick={() => onClick('question')} shape='circle' size='large' />
				</Tooltip>
			</Space>
		</header>
	)
}