import { Calendar } from 'antd'
import Header from './Header'

export default function Page () {
	return (
		<>
			<Header />
			<Calendar headerRender={() => null} />
		</>
	)
}