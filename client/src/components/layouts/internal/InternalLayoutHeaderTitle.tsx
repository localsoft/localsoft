export interface InternalLayoutHeaderTitleProps {
	collapsed: boolean
}

export default function InternalLayoutHeaderTitle ({ collapsed } : InternalLayoutHeaderTitleProps) {
	return collapsed ? (
		<span style={{ display: 'inline-block', fontSize: 30, textAlign: 'center', width: 80 }}>
			LS
		</span>
	) : (
		<span style={{ display: 'inline-block', fontSize: 30, fontVariant: 'small-caps', textAlign: 'center', width: 200 }}>
			LocalSoft
		</span>
	)
}