import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import CalendarPage from './features/calendar/CalendarPage'
import DashboardPage from './features/dashboard/Page'
import Navigation from './Navigation'
import SettingsPage from './features/settings/SettingsPage'

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
							<Route element={<SettingsPage />} path='/settings' />
						</Routes>
					</Layout.Content>
				</Layout>
			</Layout>
		</BrowserRouter>
	)
}