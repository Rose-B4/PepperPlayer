import { useState } from 'react';

import HomeScreen from './components/HomeScreen'
import PlaylistSideBar from './components/PlaylistSideBar'
import Playlist from './components/Playlist';

function App() {

	let [displayingPlaylist, setDisplayingPlaylist] = useState<boolean>(true);

	return (
		<>
			<div>
				<PlaylistSideBar />
			</div>
			{/* <div >
				{displayingPlaylist ? null : <HomeScreen />}
				{displayingPlaylist ? <Playlist /> : null}
			</div> */}
		</>
	)
}

export default App
