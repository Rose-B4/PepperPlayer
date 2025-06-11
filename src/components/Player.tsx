import { useEffect, useState } from "react"; 
import useSound from "use-sound"; // for handling the sound
import musicFile from "/src/assets/music.flac"; // importing the music
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customazing the icons
import CurrentSong from "./CurrentSong";


function Player() {
	const [currentlyPlaying, setCurrentlyPlaying] = useState<boolean>(false);
	const [currTime, setCurrTime] = useState({
		min: "",
		sec: "",
	}); // current position of the audio in minutes and seconds

	const [currentSong, setCurrentSong] = useState(new CurrentSong("/src/assets/music.flac"));


	const [seconds, setSeconds] = useState(); // current position of the audio in seconds

	const [play, { pause, duration, sound }] = useSound(musicFile);

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

	// useEffect(() => {
	// 	const sec = (duration != null ? duration : 0) / 1000;
	// 	const min = Math.floor(sec / 60);
	// 	const secRemain = Math.floor(sec % 60);
	// 	const time = {
	// 		min: min,
	// 		sec: secRemain
	// 	};
	// })

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		if (sound) {
	// 			setSeconds(sound.seek([])); // setting the seconds state with the current state
	// 			const min = Math.floor(sound.seek([]) / 60);
	// 			const sec = Math.floor(sound.seek([]) % 60);
	// 			setCurrTime({
	// 				min,
	// 				sec,
	// 			});
	// 		}
	// 	}, 1000);
	// 	return () => clearInterval(interval);
	// }, [sound]);



	return (
	<div className="component">
		<h2>Playing Now</h2>
		<img
			className="musicCover"
			src={currentSong.AlbumArt}
		/>
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