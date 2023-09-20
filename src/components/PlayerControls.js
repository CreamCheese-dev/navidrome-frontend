function PlayerControls({ onPlay, onPause, volume, onVolumeChange }) {
    return (
        <div className="player-controls">
            <button className="control-button play-button" onClick={onPlay}><i className="fa fa-play"></i></button>
            <button className="control-button pause-button" onClick={onPause}><i className="fa fa-pause"></i></button>

            <div className="volume-control">
                <i className="fa fa-volume-up volume-icon"></i>

                <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.01" 
                    className="volume-slider" 
                    value={volume}
                    onChange={onVolumeChange}
                />
            </div>

        </div>
    );
}



export default PlayerControls;