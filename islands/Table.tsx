import { Button } from '../components/Button.tsx'
import { Select, SelectItem } from "../components/Select.tsx";

export interface Column {
	property: string
	title: string
}

export interface TableProps {
	columns: Column[]
	data: object[]
	onClick?: (item: object) => void
}

export interface TableBodyProps {
	columns: Column[]
	data: object[]
	onClick?: (item: object) => void
}

export interface TableHeaderProps {
	columns: Column[]
}

function Body (props: TableBodyProps) {
	return (
		<tbody>
		{props.data.map(item => 
			<tr onClick={props.onClick} style={{ cursor: 'pointer' }}>
			{props.columns.map(column => 
				<td>{item[column.property] as unknown}</td>)}
			</tr>
		)}
		</tbody>
	)
}

function Header (props: TableHeaderProps) {
	return (
		<thead>
			<tr>
			{props.columns.map(column => 
				<td>{column.title}</td>
			)}
			</tr>
		</thead>
	)
}

export default function Table(props: TableProps) {
	return (
		<div className="ls-table">
			<table>
				<Header {...props} />
				<Body {...props} />
				<Table.Footer />
			</table>
		</div>
	)
}


Table.Footer = () => {
	const pageSizeItems: SelectItem[] = [
		{ label: '10', value: 10 },
		{ label: '25', value: 25 },
		{ label: '50', value: 50 },
	]

	const onSelect = (item: SelectItem) => {
		console.log('Table.Footer::onSelect', item)
	}

	return (
		<tfoot>
		  <span>1 - 10 of 59</span>
		  <span className='ls-table-footer-perpage'>
			<span>Rows / Page</span>
			<Select items={pageSizeItems} onSelect={onSelect} />
		  </span>
		  <span className='ls-table-footer-navigation'>
			<Button icon='«' />
			<Button icon='‹' />
			<Button icon='›' />
			<Button icon='»' />
		  </span>
		</tfoot>
		)
}