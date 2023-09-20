import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navibar';
import Footer from './components/Footer';
import MusicPlayer from './pages/MusicPlayer';
import Database from './pages/Database';
import About from './pages/AboutMe';
import './MusicPlayer.css'

function App() {
  return (
    <Router>
      <div className='app-container'>
        <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<MusicPlayer />} />
        <Route path="/database" element={<Database />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

