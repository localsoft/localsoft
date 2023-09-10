import { Button, Space, Tooltip, Typography } from "antd"
import { ImportOutlined, PlusOutlined, QuestionOutlined, SettingOutlined, UploadOutlined } from "@ant-design/icons"

export enum PageHeaderButtons {
	IMPORT = 'PageHeaderButtons:IMPORT',
	CREATE = 'PageHeaderButtons:CREATE',
	HELP = 'PageHeaderButtons:HELP',
	SETTINGS = 'PageHeaderButtons:SETTINGS',
	UPLOAD = 'PageHeaderButtons:UPLOAD',
}

export interface Props {
	buttons: PageHeaderButtons[]
	onClick: (type: string) => void
	title: string
}

export const buttonDefinitions = new Map<PageHeaderButtons, [any, string]>([
	[PageHeaderButtons.IMPORT, [<ImportOutlined />, 'Import']],
	[PageHeaderButtons.CREATE, [<PlusOutlined />, 'Create']],
	[PageHeaderButtons.HELP, [<QuestionOutlined />, 'Help']],
	[PageHeaderButtons.SETTINGS, [<SettingOutlined />, 'Settings']],
	[PageHeaderButtons.UPLOAD, [<UploadOutlined />, 'Upload']],
])

export default function PageHeader({ buttons = [], onClick, title }: Props) {
	const itemFor = (button: PageHeaderButtons) => {
		if (buttons.includes(button)) {
			const item = buttonDefinitions.get(button)
			console.log(item)
			return item ? (
				<Tooltip title={item[1]}>
					<Button icon={item[0]} onClick={() => onClick(button)} shape='circle' size='large' />
				</Tooltip>
			) : null
		} else {
			return null
		}
	}

	const style = { 
		alignItems: 'center', 
		display: "flex", 
		justifyContent: 'space-between', 
		padding: '1rem'
	}

	return (
		<header style={style}>
			<Typography.Title style={{ margin: 0 }}>{title}</Typography.Title>
			<Space>
				{itemFor(PageHeaderButtons.CREATE)}
				{itemFor(PageHeaderButtons.IMPORT)}
				{itemFor(PageHeaderButtons.UPLOAD)}
				{itemFor(PageHeaderButtons.SETTINGS)}
				{itemFor(PageHeaderButtons.HELP)}
			</Space>
		</header>
	)
}

