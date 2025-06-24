import React, { useState } from 'react';

function Header() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark(!dark);

  return (
    <div className='Header'>
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
        <button
          onClick={toggleTheme}
          style={{
            border: 'none',
            background: 'none',
            fontSize: 24,
            cursor: 'pointer'
          }}
          aria-label="切换主题"
        >
          {dark ? '🌙' : '☀️'}
        </button>
      </div>
    </div>
  )
}

export default Header;