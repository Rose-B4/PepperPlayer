import { parseBlob, selectCover, type IPicture } from 'music-metadata';
import { useEffect, useState } from 'react';

class SongData {
	public Title:string = "Loading Title...";
	public Artist:string = "Loading Artist...";
	public AlbumArt:IPicture|null = null;

	constructor(filePath : string) {
		console.log(filePath);

		GetSongData(filePath, this);
  }
}

function GetSongData(filePath:string, dataObject:SongData){
	const [title, setTitle] = useState<string>(dataObject.Title);
	const [artist, setArtist] = useState<string>(dataObject.Artist);
	const [albumArt, setAlbumArt] = useState<IPicture | null>(null);

	useEffect(() => {
		const GetSongDataAsync = async () => {
			

			// const {common} = await parseBlob(filePath);
		
			// setTitle(common.title);
			// setArtist(common.artist);

			//     const cover = selectCover(common.picture);
			// setAlbumArt(cover);
		}

		GetSongDataAsync();
	}, []);

	
	dataObject.Title = title;
	dataObject.Artist = artist
	dataObject.AlbumArt = albumArt;
}

export {
	SongData,
	GetSongData
}