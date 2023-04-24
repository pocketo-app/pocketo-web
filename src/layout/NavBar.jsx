import NavTab from '@/component/NavTab'

export default function NavBar() {
	return (
		<nav class="inline-group">
			<NavTab href="/collections" text="Collections" />
			<NavTab href="/more" text="More" />
		</nav>
	)
}
