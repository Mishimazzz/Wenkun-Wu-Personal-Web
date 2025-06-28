import React, { useState } from 'react';
import './ThemeSwitcher.css';
import sun from '../assets/sun.png';
import night from '../assets/night.png';

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState('light');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <fieldset className="switcher">
      <label className="switcher__option">
        <input
          className="switcher__input"
          type="radio"
          name="theme"
          value="light"
          checked={theme === 'light'}
          onChange={handleChange}
        />
        <img src={sun} alt="Light theme" className="switcher__icon" />
      </label>

      <label className="switcher__option">
        <input
          className="switcher__input"
          type="radio"
          name="theme"
          value="dark"
          checked={theme === 'dark'}
          onChange={handleChange}
        />
        <img src={night} alt="Dark theme" className="switcher__icon" />
      </label>
    </fieldset>
  );
};

export default ThemeSwitcher;
