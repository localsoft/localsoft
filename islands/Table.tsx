export interface Column {
	property: string
	title: string;
}

export interface TableProps {
	columns: Column[]
	data: object[]
}

export interface TableBodyProps {
	columns: Column[]
	data: object[]
}

export interface TableHeaderProps {
	columns: Column[]
}

function Body (props: TableBodyProps) {
	return (
		<tbody>
		{props.data.map(item => 
			<tr>
			{props.columns.map(column => 
				<td>{item[column.property]}</td>)}
			</tr>)}
		</tbody>
	)
}

function Footer() {
	return (
	<tfoot>
	  <span>1 - 10 of 59</span>
	  <span className='ls-table-footer-perpage'>
		<span>Rows / Page</span>
		<select>
		  <option>10</option>
		  <option>25</option>
		  <option>50</option>
		</select>
	  </span>
	  <span className='ls-table-footer-navigation'>
		<button>&lsaquo;</button>
		<button>&laquo;</button>
		<button>&raquo;</button>
		<button>&rsaquo;</button>
	  </span>
	</tfoot>
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
				<Footer />
			</table>
		</div>
	)
}
