import React, { useEffect, useState } from 'react';
import '../Database.css';

function Database() {
    const [songs, setSongs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 50;

    useEffect(() => {
        fetch("/api/getData")
            .then(response => response.json())
            .then(data => setSongs(data))
            .catch(error => console.error("Error fetching songs:", error));
    }, []);

    const numberOfPages = Math.ceil(songs.length / itemsPerPage);

    const currentSongs = songs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < numberOfPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="database-container">
            <h1>Database Page</h1>
            <table className="database-table">
                <thead>
                    <tr>
                        <th>Song Name</th>
                        <th>Album Title</th>
                        <th>Artist</th>
                    </tr>
                </thead>
                <tbody>
                    {currentSongs.map((song, index) => (
                        <tr key={index}>
                            <td>{song.title}</td>
                            <td>{song.album}</td>
                            <td>{song.artist}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button className="database-button" onClick={handlePrevious} disabled={currentPage === 1}>
                    <i className="fa fa-arrow-left"></i> Previous
                </button>
                <button className="database-button" onClick={handleNext} disabled={currentPage === numberOfPages}>
                    <i className="fa fa-arrow-right"></i> Next
                </button>
            </div>
        </div>
    );
}

export default Database;
