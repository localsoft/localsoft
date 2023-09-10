import { NextPageContext } from "next"
import { Table } from "antd"
import Page from "@/components/Page"
import PageHeader, { PageHeaderButtons } from "@/components/PageHeader"

export interface Props {
	authenticated: boolean
}

export default function People ({ authenticated }: Props) {
	const onClick = (type: string) => {

	}

	return (
		<Page authenticated={authenticated} title='Files'>
			<PageHeader buttons={[PageHeaderButtons.UPLOAD, PageHeaderButtons.HELP]} onClick={onClick} title='Files' />
			<Table />
		</Page>
	)
}

People.getInitialProps = async (context: NextPageContext) => {
	return { authenticated: true }
}