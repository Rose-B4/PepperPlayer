import * as musicMeta from 'music-metadata';

class CurrentSong {
    public Title = 'Find Your One Way';
    public Artist = 'Naoki';
    public AlbumArt = 'src/assets/glorp_pray.png';
    public MusicFile = musicMeta.parseFile("");

    constructor(filePath:string) {

        this.MusicFile = musicMeta.parseFile(filePath);
        console.log(this.MusicFile);
        
        // this.AlbumArt = musicMeta.selectCover(this.MusicFile.picture)
        // this.AlbumArt = this.MusicFile.selectCover();
        // this.Artist = artist;
        // this.AlbumArt = albumArt;
    }

    public setSong(filePath:string) {
        
        var newSong = new CurrentSong(filePath);

        this.Title = newSong.Title;
        this.Artist = newSong.Artist;
        this.AlbumArt = newSong.AlbumArt;
        this.MusicFile = newSong.MusicFile;

    }

}

export default CurrentSong;