import { useState } from 'react';

import HomeScreen from './components/HomeScreen'
import PlaylistSideBar from './components/PlaylistSideBar'
import Playlist from './components/Playlist';

function App() {

	let [displayingPlaylist, setDisplayingPlaylist] = useState<boolean>(false);

	return (
		<>
			<div>
				<PlaylistSideBar />
			</div>
			<div className='main'>
				{displayingPlaylist ? null : <HomeScreen />}
				{displayingPlaylist ? <Playlist /> : null}
			</div>
		</>
	)
}

export default App
