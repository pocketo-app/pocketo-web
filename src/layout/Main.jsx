import { Routes, Route } from '@solidjs/router'

import AppVersion from '../component/AppVersion'

function Main() {
	return (
		<main class="wrapper -wide p-half">
			<Routes>
				<Route path="/collections" element={<p>Collections page</p>} />
				<Route path="/more" element={<p>More page</p>} />
			</Routes>
			<AppVersion />
		</main>
	)
}

export default Main
