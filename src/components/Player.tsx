import { useEffect, useState } from "react"; 
import useSound from "use-sound"; // for handling the sound
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customizing the icons
import { SongData, GetSongData } from "./SongData";

// Hard coded files
import musicFile from "/src/assets/music.flac"; // importing the music

function Player() {
	const [currentlyPlaying, setCurrentlyPlaying] = useState<boolean>(false); // whether or not the song is playing
	const [play, { pause, duration, sound }] = useSound(musicFile); // reading the audio from the music file
	const [currTime, setCurrTime] = useState({ min: 0,	sec: 0,}); // current position of the audio in minutes and seconds
	const [seconds, setSeconds] = useState<number>(); // current position of the audio in seconds
	const [volume, setVolume] = useState<number>();
	const [currentSongData, setCurrentSongData] = useState<SongData>(new SongData("/src/assets/music.flac"));
	
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

	useEffect(() => {
		const interval = setInterval(() => {
			if (sound) {
				setSeconds(sound.seek([])); // setting the seconds state with the current state
				const min = Math.floor(sound.seek([]) / 60);
				const sec = Math.floor(sound.seek([]) % 60);
				setCurrTime({
					min,
					sec,
				});
			}
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
			{currTime.min}:{currTime.sec < 10 ? "0"+currTime.sec : currTime.sec}
		</div>
	</div>
	);
}

export default Player;