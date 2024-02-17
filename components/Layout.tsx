import Navigation from "./Navigation.tsx"

export interface LayoutProps {
	children: Element
	navigation?: boolean
	title: string
}

export default function Layout (props: LayoutProps) {
	return (
		<div className='display-flex'>
			<Navigation />
			<main style={{ flexGrow: 1 }}>{props.children}</main>
		</div>
	)
}