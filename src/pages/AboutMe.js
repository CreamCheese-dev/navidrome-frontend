import React from 'react';
import '../AboutMe.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1>About Page</h1>
          <p>
            Hello, fellow music enthusiasts! Welcome to my dedicated space tailored for aficionados of anime, game, vocaloid, and fan-made tunes. 
            My passion for these genres led me to create this platform where you can immerse yourself in a vast array of music.
          </p>
          <p>
            On the technical front, this website represents the learning journey I've undertaken, exploring various technologies:
          </p>
          <ul>
            <li><strong>React:</strong> I ventured into React to facilitate the frontend, aiming for a dynamic and interactive user experience.</li>
            <li><strong>CSS & Flexbox:</strong> I've delved into modern web styling techniques and layout designs to enhance the visual aspect and responsiveness of the site.</li>
            <li><strong>Raspberry Pi:</strong> I embraced the compactness of Raspberry Pi for the backend, which has been an enlightening experience in hardware setup and system administration.</li>
            <li><strong>Navidrome, Express.js & Node.js:</strong> I've explored these tools to set up the foundation for the music streaming service backend.</li>
            <li><strong>Nginx:</strong> I chose Nginx for web traffic routing, ensuring I could provide both efficiency and a level of security to the site's visitors.</li>
          </ul>
          <p>
            Thanks for checking out my website!
          </p>
        </div>
        <div className="about-image">
          {/* You can include your image here using an <img> tag */}
        </div>
      </div>
    </div>
  );
}

export default About;
