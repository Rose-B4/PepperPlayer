import { parseBlob, selectCover, type IPicture } from 'music-metadata';
import { useEffect, useState } from 'react';

class SongData {
    public Title:string|undefined;
    public Artist:string|undefined;
    public AlbumArt : IPicture | null;

    constructor(title:string|undefined, artist:string|undefined, albumArt:IPicture|null) {

    this.Title = title;
    this.Artist = artist;
    this.AlbumArt = albumArt;
        console.log(this.Title);
  }
}

function GetSongData(filePath : string) : SongData{
    const [title, setTitle] = useState<string | undefined>();
    const [artist, setArtist] = useState<string | undefined>();
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

    
    return new SongData(title,artist,albumArt);
}

export {
    SongData,
    GetSongData
}