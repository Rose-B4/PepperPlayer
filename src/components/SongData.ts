import { IAudioMetadata, parseBlob, type IPicture } from 'music-metadata';
import { useEffect } from 'react';

class SongData {
	public Title:string = "Loading Title...";
	public Artist:string = "Loading Artist...";
	// public TrackNum:number = 0;
	public AlbumArt:string = "./src/assets/blank_cd.jpg";
	public FilePath:string;
	public FileBlob:IAudioMetadata|null = null;

	constructor(filePath : string) {
		this.FilePath = filePath;
		GetSongData(this);
	}

	public UpdateTrackInfo() {
		this.Title = this.FileBlob?.common.title? this.FileBlob.common.title : this.Title;
		this.Artist = this.FileBlob?.common.artist? this.FileBlob.common.artist : this.Artist;
		// this.TrackNum = this.FileBlob?.common.track? this.FileBlob.common.track : this.TrackNum;
		console.log(this.Title);
		
	}

	public SetAlbumArt(blob:Uint8Array|null) {
		if(blob != null) {
			this.AlbumArt = URL.createObjectURL(
				new Blob([blob as BlobPart], {
					type: "image/jpeg"
				})
            );
		}
	}
}

function GetSongData(songData:SongData){
	useEffect(() => {
		const GetSongDataAsync = async () => {
			fetch(songData.FilePath)
				.then(response => response.blob())
				.then(blob => parseBlob(blob))
				.then(blob => songData.FileBlob = blob)
				.then(blob => blob.common.picture? blob.common.picture[0] : null)
				.then(blob => songData.SetAlbumArt(blob? blob.data : null))
				.then(blob => songData.UpdateTrackInfo());
		}

		GetSongDataAsync();
	}, []);
}


export {
	SongData
}