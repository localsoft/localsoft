import { PlusOutlined, QuestionOutlined } from "@ant-design/icons"
import { Button, Flex, Form, Input, Tooltip, Typography } from "antd"

export interface BasePageProps {
	noun: string
	title: string
}

export default function BasePage (props: BasePageProps) {
	const options = ['Month', 'Year']
	return (
		<Flex align='center' justify='space-between' style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
			<Typography.Title>{props.title}</Typography.Title>
			<Form layout='inline' size='large'>
				<Form.Item>
					<Input.Search placeholder='Search for Events' />
				</Form.Item>
			</Form>
			<Flex gap='small' justify='space-between'>
				<Tooltip title='Help'>
					<Button icon={<QuestionOutlined />} shape='circle' size='large' />
				</Tooltip>
				<Tooltip title='Create New Event'>
					<Button icon={<PlusOutlined />} shape='circle' size='large' />
				</Tooltip>
			</Flex>
		</Flex>
	)
}