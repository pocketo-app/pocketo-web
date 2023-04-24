import { useMatch } from '@solidjs/router'
import { mergeProps } from 'solid-js'

function CompactNavTab(rawProps) {
	const props = mergeProps({ href: '', text: '', count: 0 }, rawProps)
	const match = useMatch(() => props.href) // See the note in NavTab component
	return (
		<option value={props.href} selected={match()}>
			{props.text} {props.count === 0 ? '' : `(${props.count})`}
		</option>
	)
}

export default CompactNavTab
