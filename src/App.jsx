import Header from './layout/Header'
import Main from './layout/Main'

function App() {
	const headerStyle = {
		'background-color': 'white',
		'border-bottom': '1px solid var(--color-neutral-tint2)',
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

export default App
