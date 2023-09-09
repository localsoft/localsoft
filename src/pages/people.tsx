import { NextPageContext } from "next"
import { Table } from "antd"
import Page from "@/components/Page"
import PageHeader from "@/components/PageHeader"

export interface Props {
	authenticated: boolean
}

export default function People ({ authenticated }: Props) {
	return (
		<Page authenticated={authenticated} title='People'>
			<PageHeader title='People' />
			<Table />
		</Page>
	)
}

People.getInitialProps = async (context: NextPageContext) => {
	return { authenticated: true }
}