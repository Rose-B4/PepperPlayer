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
	const [currentSongData, setCurrentSongData] = useState<SongData>(GetSongData("/src/assets/music.flac"));
	
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
	<div className="component">
		<h2>Playing Now</h2>
		<div>
			title: {currentSongData.Title}
		</div>
		<div>
			<button className="prevTrackButton">
				<IconContext.Provider value={{ size: "3em", color: "#a600d4" }}>
					<BiSkipPrevious />
				</IconContext.Provider>
			</button>
			{!currentlyPlaying ? (
				<button className="playButton" onClick={playingButton}>
					<IconContext.Provider value={{ size: "3em", color: "#a600d4" }}>
						<AiFillPlayCircle />
					</IconContext.Provider>
				</button>
			) : (
				<button className="playButton" onClick={playingButton}>
					<IconContext.Provider value={{ size: "3em", color: "#a600d4" }}>
						<AiFillPauseCircle />
					</IconContext.Provider>
				</button>
			)}
			<button className="nextTrackButton">
				<IconContext.Provider value={{ size: "3em", color: "#a600d4" }}>
					<BiSkipNext />
				</IconContext.Provider>
			</button>
		</div>
		<div>
			Timeline
			<input
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