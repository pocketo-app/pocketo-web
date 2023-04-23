import CompactNavBar from './CompactNavBar'
import NavBar from './NavBar'
import AddBookmarkBox from '../component/AddBookmarkBox'

import '../css/Header.responsive.css'

function Header() {
	return (
		<header class="wrapper -wide p-half clearfix">
			<div class="CompactNavBar">
				<CompactNavBar />
			</div>
			<div class="NavBar f-left">
				<NavBar />
			</div>
			<div class="AddBookmarkBox f-right">
				<AddBookmarkBox title="Save a bookmark" placeholder="Paste the URL here" />
			</div>
		</header>
	)
}

export default Header
