import '@/styles/_app.css'
import { ConfigProvider } from 'antd'
import { theme } from '../theme'
import type { AppProps } from 'next/app'

export default function App ({ Component, pageProps }: AppProps) {
	return (
		<ConfigProvider theme={theme}>
			<Component {...pageProps} />
		</ConfigProvider>
	)
}