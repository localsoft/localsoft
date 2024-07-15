import { Table } from 'antd'
import InternalLayout from '@/components/InternalLayout'

export default () => {
	const dataSource = []
	const showHeader = false

	return (
		<InternalLayout>
			<Table
				showHeader={showHeader}
				dataSource={dataSource}
			/>
		</InternalLayout>
	)
}
