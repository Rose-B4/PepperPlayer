// import * as musicMeta from 'music-metadata';
import { type IPicture } from 'music-metadata';


class CurrentSong {
    public Title : string = "";
    public Artist : string = "";
    public AlbumArt : IPicture|null;

    constructor(title:string, artist:string, albumArt:IPicture|null) {
        this.Title = title;
        this.Artist = artist;
        this.AlbumArt = albumArt;
    }
   
}

export default CurrentSong;