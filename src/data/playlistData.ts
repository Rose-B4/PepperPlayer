import { SongData } from "./songData"

class PlayListData {
    public Name:string = "Loading Playlist Name";
    public Track:Array<SongData> = new Array<SongData>();
    public coverArt:string = "./src/assets/blank_cd.jpg"

    constructor() {
        
    }
}

export default PlayListData