import { useEffect, useState } from "react"; 
import useSound from "use-sound"; // for handling the sound
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customizing the icons
import CurrentSong from "./CurrentSong";

import { parseFile, selectCover, type IAudioMetadata, type IPicture } from 'music-metadata';

// Hard coded files
import musicFile from "/src/assets/music.flac"; // importing the music

async function ReadSong(filePath:string) : Promise<CurrentSong> {
	const {common} = await parseFile(filePath);
	const cover = selectCover(common.picture); // pick the cover image

	return new CurrentSong(String(common.title), String(common.artist), cover)
}

function Player() {
	const [currentlyPlaying, setCurrentlyPlaying] = useState<boolean>(false); // whether or not the song is playing
	const [currTime, setCurrTime] = useState({ min: "",	sec: "",}); // current position of the audio in minutes and seconds
	const [seconds, setSeconds] = useState(); // current position of the audio in seconds
	const [play, { pause, duration, sound }] = useSound(musicFile); // reading the audio from the music file
	
	const [currentSong, setCurrentSong] = useState(ReadSong(musicFile)); // reading the metadata from the music file

	const playingButton = () => {
		if (currentlyPlaying) {
			pause(); // this will pause the audio
			setCurrentlyPlaying(false);
		}
		else {
			play(); // this will play the audio
			setCurrentlyPlaying(true);
		}
	};

	return (
	<div className="component">
		<h2>Playing Now</h2>
		{/* <img
			className="musicCover"
			src={currentSong.AlbumArt}
		/> */}
		<div>
			<h3 className="title">{currentSong.Title}</h3>
			<p className="subTitle">{currentSong.Artist}</p>
		</div>
		<div>
			<button className="prevTrackButton">
				<IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
					<BiSkipPrevious />
				</IconContext.Provider>
			</button>
			{!currentlyPlaying ? (
				<button className="playButton" onClick={playingButton}>
					<IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
						<AiFillPlayCircle />
					</IconContext.Provider>
				</button>
			) : (
				<button className="pauseButton" onClick={playingButton}>
					<IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
						<AiFillPauseCircle />
					</IconContext.Provider>
				</button>
			)}
			<button className="nextTrackButton">
				<IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
					<BiSkipNext />
				</IconContext.Provider>
			</button>
		</div>
	</div>
	);
}

export default Player;