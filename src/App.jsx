function App() {
	const APP_NAME = import.meta.env.VITE_APP_NAME
	const APP_VERSION = import.meta.env.VITE_APP_VERSION
	return (
		<p>
			{APP_NAME} {APP_VERSION} ({import.meta.env.MODE} build)
		</p>
	)
}

export default App
