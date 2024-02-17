import { ComponentChildren } from "preact"

export interface ButtonProps {
	children?: ComponentChildren
	icon?: '+' | '?' | '‹' | '›' | '«' | '»'
	href?: string
	label?: string
	onClick?: () => void
}

export interface ButtonGroupProps {
	children: ComponentChildren
}

export const Button = (props: ButtonProps) => {
	const children = props.children ? props.children : <>{props.icon} {props.label}</>
	return <a className='ls-button' href={props.href} onClick={props.onClick}>{children}</a>
}

Button.Group = (props: ButtonGroupProps) => {
	return (
		<div className='ls-button-group'>
			{props.children}
		</div>
	)
}