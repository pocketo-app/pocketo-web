/* @refresh reload */
import { render } from 'solid-js/web'
import { ErrorBoundary } from 'solid-js'
import { Router } from '@solidjs/router'

import 'cutestrap/dist/css/cutestrap.css'
import './index.css'
import App from './App'

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?'
	)
}

render(
	() => (
		<ErrorBoundary fallback={handleComponentError}>
			<Router>
				<App />
			</Router>
		</ErrorBoundary>
	),
	root
)

function handleComponentError(err) {
	// Auto log error to console and skip render the component
	return err
}
