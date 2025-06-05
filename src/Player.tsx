import { useEffect, useState } from "react"; 
import useSound from "use-sound"; // for handling the sound
import musicFile from "./assets/music.flac"; // importing the music
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customazing the icons

function Player() {

	const [currentlyPlaying, setCurrentlyPlaying] = useState<boolean>(false);

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

	return (
	<div className="component">
		<h2>Playing Now</h2>
		<img
			className="musicCover"
			src="https://picsum.photos/200/200"
		/>
		<div>
			<h3 className="title">Rubaiyyan</h3>
			<p className="subTitle">Qala</p>
		</div>
		<div>
			<button className="playButton">
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
				<button className="playButton" onClick={playingButton}>
					<IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
						<AiFillPauseCircle />
					</IconContext.Provider>
				</button>
			)}
			<button className="playButton">
				<IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
					<BiSkipNext />
				</IconContext.Provider>
			</button>
		</div>
	</div>
	);
}

export default Player;