import { Button } from "antd"
import InternalLayout from "../components/layouts/InternalLayout"

export default function Index () {
	return (
		<InternalLayout title="Welcome">
			<h1>Hello World</h1>
			<Button type="primary">Click</Button>
		</InternalLayout>
	)
}