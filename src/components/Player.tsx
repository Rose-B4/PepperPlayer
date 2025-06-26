import { useEffect, useState } from "react"; 
import useSound from "use-sound"; // for handling the sound
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customizing the icons
import SongData from "../data/songData";

// Hard coded files
import musicFile from "/src/assets/music.flac"; // importing the music

function Player() {
	const [currentSongData, setCurrentSongData] = useState<SongData>(new SongData(musicFile));
	
	const [play, { pause, duration, sound }] = useSound(currentSongData.FilePath); // reading the audio from the music file
	useEffect(() => {
		const interval = setInterval(() => {
			// if (sound) { }
		}, 50);
		return () => clearInterval(interval);
	}, [sound]);

	return (
	<div className="Player" id="test">
		<h2>Playing Now</h2>
		<div>
			Title: {currentSongData.Title} <br/>
			Artist: {currentSongData.Artist}
		</div>
		<div>
			<img className="albumCover" src= {currentSongData.AlbumArt} alt="Album Cover Art" />
		</div>
		{/* <div className="trackControls">
			<button className="trackControlButton changeTrackButton">
				<IconContext.Provider value={{ size: "3em" }}>
					<BiSkipPrevious />
				</IconContext.Provider>
			</button>
			{!currentlyPlaying ? (
				<button className="trackControlButton playButton" onClick={playingButton}>
					<IconContext.Provider value={{ size: "3em"}}>
						<AiFillPlayCircle />
					</IconContext.Provider>
				</button>
			) : (
				<button className="trackControlButton playButton" onClick={playingButton}>
					<IconContext.Provider value={{ size: "3em"}}>
						<AiFillPauseCircle />
					</IconContext.Provider>
				</button>
			)}
			<button className="trackControlButton changeTrackButton">
				<IconContext.Provider value={{ size: "3em"}}>
					<BiSkipNext />
				</IconContext.Provider>
			</button>
		</div>
		<div>
			<input className="slider timeline"
				type="range"
				min={0}
				max={(duration? duration : 0)/1000}
				step={0.5}
				onChange={(newValue) => {
					sound.seek([newValue.target.value]);
				}}
				value={seconds}
			/>
			{currTime.min}:{currTime.sec < 10 ? "0"+currTime.sec : currTime.sec} / {totalTime.min}:{totalTime.sec < 10 ? "0"+totalTime.sec : totalTime.sec}
		</div> */}
		<audio
			controls
			controlsList="nodownload"
			src={currentSongData.FilePath}
		/>
	</div>
	);
}

export default Player;