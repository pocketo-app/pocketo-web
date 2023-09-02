import { lazy } from 'solid-js'
import { Routes, Route } from '@solidjs/router'

import AppVersion from '@/component/AppVersion'

const NotFoundPage = lazy(() => import('@/page/NotFoundPage'))

export default function Main() {
	return (
		<main class="wrapper -wide p-half">
			<Routes>
				<Route path="/collections" element={<p>Collections page</p>} />
				<Route path="/more" element={<p>More page</p>} />
				<Route path="/*" component={NotFoundPage} />
			</Routes>
			<AppVersion />
		</main>
	)
}
