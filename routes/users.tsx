import { createUsers } from "../types/User.ts"
import Layout from '../components/Layout.tsx'
import Table from '../islands/Table.tsx'

const columns = [{
	property: 'role',
	title: 'Role',
}, {
	property: 'username',
	title: 'Username',
}, {
	property: 'email',
	title: 'Email',
}]

export default function People () {
	const data = createUsers(10)

	return (
		<Layout navigation title='People'>
			<Table columns={columns} data={data} />
		</Layout>
	)
}