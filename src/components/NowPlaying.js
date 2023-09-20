import '../MusicPlayer.css';


function NowPlaying({ song, album, artist, albumCover }) {
    return (
        <div className="song-info">
            <h1>{song}</h1>
            <h2>{album}</h2>
            <h3>{artist}</h3>
            <img className="album-cover" src={albumCover} alt="album-cover" />
        </div>
    );
}

export default NowPlaying;