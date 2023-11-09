import { Button, Tooltip } from 'antd'
import { ReactNode } from 'react'

export interface ActionButtonProps {
	icon: ReactNode
	noun: string
	onClick: () => void
}

export default function ActionButton (props: ActionButtonProps) {
	return (
		<Tooltip title={`New ${props.noun}`}>
			<Button 
				icon={props.icon} 
				onClick={props.onClick}
				shape='circle' 
				size='large'
			/>
		</Tooltip>
	)
}