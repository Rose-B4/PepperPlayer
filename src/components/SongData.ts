import { parseBlob, parseFile, selectCover, type IPicture } from 'music-metadata';
import { useEffect, useState } from 'react';

class SongData {
	public Title:string = "Loading Title...";
	public Artist:string = "Loading Artist...";
	public AlbumArt:string = "./src/assets/blank_cd.jpg";
	public FilePath:string;

	constructor(filePath : string) {
		this.FilePath = filePath;
		// console.log(filePath);

		GetSongData(this);
  }
}

function GetSongData(songData:SongData){
	const [title, setTitle] = useState<string>(songData.Title);
	const [artist, setArtist] = useState<string>(songData.Artist);
	const [albumArt, setAlbumArt] = useState<string>(songData.AlbumArt);

	// const reader = new FileReader();

	useEffect(() => {
		// const GetSongDataAsync = async () => {
		// 	const fileBlob:Blob = new Blob([songData.FilePath]);
		// 	const {common} = await parseBlob(fileBlob);
		
		// 	setTitle(common.title? common.title : songData.Title);
		// 	setArtist(common.artist? common.artist :  songData.Artist);

		// 	const cover = selectCover(common.picture);
		// 	setAlbumArt(cover);
		// }

		// GetSongDataAsync();
		songData.Title = title;
		songData.Artist = artist
		songData.AlbumArt = albumArt;
	}, []);

	
}

export {
	SongData,
	GetSongData
}