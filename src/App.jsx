import Header from '@/layout/Header'
import Main from '@/layout/Main'

export default function App() {
	const headerStyle = {
		'background-color': 'var(--color-neutral-tint5)',
		'border-bottom': '1px solid var(--color-neutral-tint1)',
	}
	return (
		<>
			<div class="sticky-top on-top-1 shadow" style={headerStyle}>
				<Header />
			</div>
			<div>
				<Main />
			</div>
		</>
	)
}
