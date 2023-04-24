import { Routes, Route } from '@solidjs/router'

import AppVersion from '@/component/AppVersion'

export default function Main() {
	return (
		<main class="wrapper -wide p-half">
			<Routes>
				<Route path="/collections" element={<p>Collections page</p>} />
				<Route path="/more" element={<p>More page</p>} />
				<Route path="/*" element={<p>Not found page</p>} />
			</Routes>
			<AppVersion />
		</main>
	)
}
