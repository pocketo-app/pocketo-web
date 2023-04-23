import { mergeProps } from 'solid-js'
import { A } from '@solidjs/router'

function NavTab(rawProps) {
	const props = mergeProps({ href: '', text: '', count: 0 }, rawProps)
	return (
		<A href={props.href} class="button" activeClass="active" inactiveClass="inactive -secondary">
			{props.text} <sup>{props.count === 0 ? '' : props.count}</sup>
		</A>
	)
}

export default NavTab
