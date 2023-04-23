function AppVersion() {
	const APP_NAME = import.meta.env.VITE_APP_NAME
	const APP_VERSION = import.meta.env.VITE_APP_VERSION
	return (
		<div class="p-half">
			<p>
				{APP_NAME} {APP_VERSION} ({import.meta.env.MODE} build)
			</p>
		</div>
	)
}

export default AppVersion
