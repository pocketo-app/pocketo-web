import { A } from '@solidjs/router'

export default function NotFoundPage() {
	return (
		<>
			<p>Not found page</p>
			<div>
				<A href="/" replace>
					Go home
				</A>
			</div>
		</>
	)
}
