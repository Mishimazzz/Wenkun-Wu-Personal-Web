// import { useState } from 'react';
import "./Header.css"
import ThemeSwitcher from '../Components/ThemeSwitcher';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  // const [dark, setDark] = useState(false);

  // const toggleTheme = () => setDark(!dark);

  return (
    <div className='Header'>
      <div className='content'>
        {/*logo*/}
        <div>
          <Link to="/HomePage">
            <img src={logo} alt="logo" style={{ height: "120px", width: "120px" }} />
          </Link>
        </div>
        {/* middle of topbar */}
        <div className='Nav'>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/photos">Photos</Link>
          </nav>
        </div>
        {/* change background color */}
        <div className='ThemeToggle'>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}

export default Header;