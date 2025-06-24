import { readFile } from 'fs';
import { IAudioMetadata, parseBlob, selectCover, type IPicture } from 'music-metadata';
import { useEffect, useState } from 'react';

class SongData {
	public Title:string = "Loading Title...";
	public Artist:string = "Loading Artist...";
	public AlbumArt:string = "./src/assets/blank_cd.jpg";
	public FilePath:string;
	public FileBlob:IAudioMetadata|null = null;

	constructor(filePath : string) {
		this.FilePath = filePath;
		// console.log(filePath);

		GetSongData(this);
	}

	public updateTrackInfo() {
		this.Title = this.FileBlob?.common.title? this.FileBlob.common.title : this.Title;
		this.Artist = this.FileBlob?.common.artist? this.FileBlob.common.artist : this.Artist;
		console.log(this.Title);
		
	}
}

function GetSongData(songData:SongData){
	useEffect(() => {
		const GetSongDataAsync = async () => {
			fetch(songData.FilePath)
				.then(response => response.blob())
				.then(blob => parseBlob(blob))
				.then(blob => songData.FileBlob = blob)
				.then(blob => songData.updateTrackInfo())
			// const cover = selectCover(common.picture);
			// setAlbumArt(cover);
		}

		GetSongDataAsync();
	}, []);
}


export {
	SongData,
	GetSongData
}