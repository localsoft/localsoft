import { PlusOutlined, QuestionOutlined } from "@ant-design/icons"
import { Button, Flex } from "antd"
import ButtonGroup from "antd/es/button/button-group"

export const HeaderProps = {

}

export const Header = ({ title }: HeaderProps) => 
	<header>
		<Flex justify='space-between' style={{ backgroundColor: 'lightgray', padding: '0.5rem' }}>
			<h1>{title}</h1>
			<Flex gap='small'>
				<Button icon={<PlusOutlined />} size='large' />
				<Button icon={<QuestionOutlined />} size='large' />
			</Flex>
		</Flex>
	</header>