import React, { useState } from 'react';
import "./Header.css"
import ThemeSwitcher from '../Components/ThemeSwitcher';

function Header() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark(!dark);

  return (
    <div className='Header'>
      <div className='content'>
        {/*logo*/}
        <div>
          <img></img>
        </div>
        {/* middle of topbar */}
        <div className='Nav'>
          <nav>
            <a href='#'>About</a>
            <a href='#'>Projects</a>
            <a href='#'>Photos</a>
            <a href='#'>Blog</a>
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