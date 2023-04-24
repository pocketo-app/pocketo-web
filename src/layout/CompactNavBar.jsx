import { useNavigate } from '@solidjs/router'

import CompactNavTab from '../component/CompactNavTab'

export default function CompactNavBar() {
	const navigate = useNavigate()
	const onChangeTab = (event) => {
		const href = event.target.value
		navigate(href)
	}
	return (
		<label class="field mb-zero">
			<select onChange={onChangeTab}>
				<CompactNavTab href="/collections" text="Collections" />
				<CompactNavTab href="/more" text="More" />
				<option disabled selected>
					Others
				</option>
			</select>
			<span class="label">Menu</span>
		</label>
	)
}
