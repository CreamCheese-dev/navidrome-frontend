import { Link } from 'react-router-dom';
import '../MusicPlayer.css';

function NavBar() {
    return (
        <nav className='navibar'>
            <img src="/logo.svg" alt="Logo" className="brand-logo" />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/database">Database</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
