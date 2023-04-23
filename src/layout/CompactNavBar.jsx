import { createEffect, createSignal, on } from 'solid-js'
import { useLocation, useNavigate } from '@solidjs/router'

import CompactNavTab from '../component/CompactNavTab'

export default function CompactNavBar() {
	const [activeHref, setActiveHref] = createSignal('')
	const location = useLocation()
	const navigate = useNavigate()

	createEffect(
		on(
			() => location.pathname,
			() => setActiveHref(getActiveHref())
		)
	)

	function getActiveHref() {
		const activeNavTab = document.querySelector('a.active') // NavTab component
		return activeNavTab ? activeNavTab.getAttribute('href') : null
	}

	function onChangeTab(event) {
		const href = event.target.value
		navigate(href)
	}

	return (
		<label class="field mb-zero">
			<select onChange={onChangeTab}>
				<CompactNavTab activeHref={activeHref()} href="/collections" text="Collections" />
				<CompactNavTab activeHref={activeHref()} href="/more" text="More" />
				<option disabled selected>
					Others
				</option>
			</select>
			<span class="label">Menu</span>
		</label>
	)
}
