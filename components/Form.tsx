import { Component } from "preact"
import Orientation from '../types/Orientation.ts'

export interface FormProps {
	children: Component
	orientation?: Orientation
	onSubmit?: () => void
}

export interface FormItemProps {
	name: string
	placeholder: string
	type: 'number' | 'search' | 'text'
}

export const Form = (props: FormProps) => {
	return <form children={props.children} className='ls-form' onSubmit={props.onSubmit} />
}

Form.Item = (props: FormItemProps) => {
	return (
		<section className='ls-form-item'>
			<input 
				name={props.name} 
				placeholder={props.placeholder}
				type={props.type}
			/>
		</section>
	)
}