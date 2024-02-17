import { Button } from "../components/Button.tsx"
import { createUsers } from "../types/User.ts"
import Layout from '../components/Layout.tsx'
import Table from '../islands/Table.tsx'

const columns = [{
	property: 'username',
	title: 'Username',
}, {
	property: 'email',
	title: 'Email',
}, {
	property: 'role',
	title: 'Role',
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