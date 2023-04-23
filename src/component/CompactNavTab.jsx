import { mergeProps } from 'solid-js'

function CompactNavTab(rawProps) {
	const props = mergeProps({ activeHref: '', href: '', text: '', count: 0 }, rawProps)
	return (
		<option value={props.href} selected={props.activeHref === props.href}>
			{props.text} {props.count === 0 ? '' : `(${props.count})`}
		</option>
	)
}

export default CompactNavTab
