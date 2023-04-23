import NavBar from './NavBar'
import AddBookmarkBox from '../component/AddBookmarkBox'

function Header() {
	return (
		<header class="wrapper -wide p-half clearfix">
			<div class="f-left">
				<NavBar />
			</div>
			<div class="f-right">
				<AddBookmarkBox title="Save a bookmark" placeholder="Paste the URL here" />
			</div>
		</header>
	)
}

export default Header
