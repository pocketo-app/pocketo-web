import { mergeProps } from 'solid-js'
import { A, useMatch } from '@solidjs/router'

export default function NavTab(rawProps) {
	const props = mergeProps({ href: '', text: '', count: 0 }, rawProps)
	const match = useMatch(() => props.href)

	// Use `useMatch()` primitive instead of `activeClass` and `inactiveClass`
	// Because `useMatch()` uses exact URL matching, the same as `<Route>` component
	// And `activeClass` and `inactiveClass` use prefix match
	// You can test this by opening Chrome Devtools
	return (
		<A href={props.href} class="button" classList={{ '-secondary': !match() }}>
			{props.text} <sup>{props.count === 0 ? '' : props.count}</sup>
		</A>
	)
}
