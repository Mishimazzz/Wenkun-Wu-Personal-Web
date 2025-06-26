// filepath: c:\Users\16039\Desktop\Wenkun Wu Personal website\vite-project\src\App.tsx
import React from 'react'
import Header from './Header'
import "./HomePage.css"
import IsometricBoxes from './IsometricBoxes';


function HomePage() {
  return (
    <div>
      <Header />
      <div className='TopFrame'>
        <div className='HomePage'>
          <div className='leftSection'>
            <h1>Software engineer, technical writer & open-source maintainer</h1>
            <p>
              I'm Victor Eke, an experienced frontend developer passionate about
              learning and building open-source software that is beneficial to developers and the world at large.
            </p>
            {/* personal links */}
              <a className="social-link" href="https://www.linkedin.com/in/wenkun-wu-20939b293/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="icon" />
                <span style={{ fontFamily: "var(--text-font-family)" }}>LinkedIn</span>
            </a>
          </div>
          <div className='rightSection'>
            <IsometricBoxes />
          </div>
        </div>
      </div>
      <div className='workExperience'>
        <h1>Work Experience</h1>
      </div>
    </div>
  )
}

export default HomePage