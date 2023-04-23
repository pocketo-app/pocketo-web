import NavTab from '../component/NavTab'

function NavBar() {
	return (
		<nav class="inline-group">
			<NavTab href="/collections" text="Collections" />
			<NavTab href="/more" text="More" />
		</nav>
	)
}

export default NavBar
