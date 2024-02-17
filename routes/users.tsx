import { createUsers } from "../types/User.ts"
import Layout from '../components/Layout.tsx'
import Table from '../islands/Table.tsx'
import { Button } from "../components/Button.tsx";
import { Form } from "../components/Form.tsx";

const columns = [{
	property: 'username',
	title: 'Username',
}, {
	property: 'email',
	title: 'Email',
}, {
	property: 'role',
	title: 'Role',
}, {
	property: 'status',
	title: 'Status',
}, {
	title: 'Actions',
}]



export default function People () {
	const data = createUsers(10)

	const onClick = (item: object) => {
		console.log(item)
	}

	return (
		<Layout navigation title='Users'>
			<header className='display-flex padding-md'>
				<h1>Users</h1>
				<div className='display-flex'>
					<Button href='/help/users' label='Help' />
					&nbsp;
					<Button href='/users/new' label='Create' />
				</div>
			</header>
			<Table columns={columns} data={data} onClick={onClick} />
		</Layout>
	)
}