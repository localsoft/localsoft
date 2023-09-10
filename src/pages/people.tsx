import { NextPageContext } from "next"
import { Table } from "antd"
import Page from "@/components/Page"
import PageHeader, { PageHeaderButtons } from "@/components/PageHeader"

export interface Props {
	authenticated: boolean
}

export default function People ({ authenticated }: Props) {
	return (
		<Page authenticated={authenticated} title='People'>
			<PageHeader buttons={[PageHeaderButtons.CREATE, PageHeaderButtons.IMPORT, PageHeaderButtons.HELP]} title='People' />
			<Table />
		</Page>
	)
}

People.getInitialProps = async (context: NextPageContext) => {
	return { authenticated: true }
}