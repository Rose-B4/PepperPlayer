import { LegacyRef, useEffect, useRef, useState } from "react"; 
import useSound from "use-sound"; // for handling the sound
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customizing the icons
import {SongData, GetSongData} from "../data/songData";
import H5AudioPlayer from "react-h5-audio-player";



function Player() {
	const playlist = [
		'/src/assets/music.flac',
		'/src/assets/music2.flac'
	];

	const [currentSongData, setCurrentSongData] = useState(new SongData(playlist[0]));
	const [volumeLevel, setVolumeLevel] = useState(0.3)
	const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
	
	const playerRef = useRef<H5AudioPlayer & { audio: React.RefObject<HTMLAudioElement> }>(null);

	//#region Really not sure why this section is necessary... but the metadata wont load without it
	const [play, { pause, duration, sound }] = useSound(currentSongData.FilePath); // reading the audio from the music file
	useEffect(() => {
		const interval = setInterval(() => {
			// if (sound) { }
		}, 50);
		return () => clearInterval(interval);
	}, [sound]);
	//#endregion


	useEffect(() => {
		const audioElement = playerRef.current?.audio?.current;
		if (audioElement) {
			audioElement.volume = volumeLevel;
		}
	}, [volumeLevel]);

	const handleClickNext = () => {
		setCurrentTrackIndex(currentTrackIndex + 1);
	};

	const handleClickPrev = () => {
		setCurrentTrackIndex(currentTrackIndex - 1);
	};

	const handleVolumeChange = (newVolume:number) => {
		setVolumeLevel(newVolume);
		console.log(volumeLevel);
	};

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
		<div>
			<input
				type="range"
				min={0}
				max={1}
				step={0.01}
				value={volumeLevel}
				onChange={(newValue) =>
					handleVolumeChange(parseFloat(newValue.target.value))
				}
			/>
		</div>
		<div>
			<H5AudioPlayer
				ref={playerRef}
				src={playlist[currentTrackIndex]}
				showSkipControls={true}
				showJumpControls={false}
				onClickNext={handleClickNext}
				onClickPrevious={handleClickPrev}
				volume={volumeLevel}
				autoPlayAfterSrcChange
			/>
		</div>
		<div>
			{currentSongData.FilePath}
		</div>
	</div>
	);
}

export default Player;