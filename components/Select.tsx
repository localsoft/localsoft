export type SelectItem = {
	label: string
	value: number | string
}

export interface SelectProps {
	items: SelectItem[]
	onSelect: (item: SelectItem) => void
}

export const Select = (props: SelectProps) => {
	const children = props.items.map(item => 
		<option value={item.value}>{item.label}</option>)
	
	return (
		<select children={children} className='ls-select' />
	)
}
