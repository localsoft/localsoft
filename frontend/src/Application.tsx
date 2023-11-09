import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import CalendarPage from './calendar/Page'
import DashboardPage from './dashboard/Page'
import Navigation from './Navigation'

export default function Application() {
	return (
		<BrowserRouter>
			<Layout>
				<Layout.Sider collapsible defaultCollapsed theme='light'>
					<Navigation />
				</Layout.Sider>
				<Layout>
					<Layout.Content>
						<Routes>
							<Route element={<DashboardPage />} path='/' />
							<Route element={<CalendarPage />} path='/calendar' />
						</Routes>
					</Layout.Content>
				</Layout>
			</Layout>
		</BrowserRouter>
	)
}