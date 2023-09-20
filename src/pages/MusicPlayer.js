import React, { useState, useEffect, useRef } from 'react';
import NowPlaying from '../components/NowPlaying';
import PlayerControls from '../components/PlayerControls'; 
import '../MusicPlayer.css';

function MusicPlayer() {
    const [song, setSong] = useState({});
    const [volume, setVolume] = useState(0.5);
    const [error, setError] = useState(null);
    const audioRef = useRef(new Audio());

    useEffect(() => {
        const { current: audio } = audioRef;
        console.log('Component mounted. Fetching song...');
        fetchAndPlaySong();

        return () => {
            audio.onended = null;
            audio.oncanplaythrough = null;
            audio.pause();
            audio.src = ""; // Empty the source
        };
    }, []);

    useEffect(() => {
        const { current: audio } = audioRef;
        audio.onended = fetchAndPlaySong;

        return () => {
            audio.onended = null;
        };
    }, [song]);

    const fetchAndPlaySong = () => {
        console.log('Fetching song...');
        fetch("/api/get-song")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Song received:', data);
                setSong(data);
                const streamProxyUrl = `/api/stream/${data.id}`;  
                if (audioRef.current.src !== streamProxyUrl) {
                    audioRef.current.src = streamProxyUrl;
                }

                audioRef.current.oncanplaythrough = () => {
                    audioRef.current.play().catch(e => {
                        console.error('Error during playback:', e);
                    });
                    audioRef.current.oncanplaythrough = null;
                };
            })
            .catch(error => {
                console.error('Error fetching song:', error);
                setError('An error occurred while fetching the song. Please try again later.');
            });
    };

    const handlePlay = () => {
        console.log("Play button pressed");
        if (audioRef.current.paused) {
            audioRef.current.play();
        }
    };

    const handlePause = () => {
        console.log("Pause button pressed");
        audioRef.current.pause();
    };

    const handleVolumeChange = (event) => {
        const value = parseFloat(event.target.value);
        setVolume(value);
        audioRef.current.volume = value;
    };

    const coverArtProxyUrl = `/api/getCoverArt/${song.id || 'default'}`;

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="music-player">
            <NowPlaying song={song.title || "Example Song"} album={song.album || "Example Album"} artist={song.artist || "Example Artist"} albumCover={coverArtProxyUrl} />
            <PlayerControls onPlay={handlePlay} onPause={handlePause} volume={volume} onVolumeChange={handleVolumeChange} />
        </div>
    );
}

export default MusicPlayer;
