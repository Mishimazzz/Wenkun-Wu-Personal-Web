// filepath: c:\Users\16039\Desktop\Wenkun Wu Personal website\vite-project\src\App.tsx
import React from 'react'
import Header from './Header'
import "./HomePage.css"
import IsometricBoxes from './IsometricBoxes';
import WorkCard from './WorkCard';

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
      <div className='BottomFrame'>
        <div className='workExperience'>
          <h1>Work Experience</h1>
          <WorkCard
            logo="https://media.licdn.com/dms/image/v2/D4E0BAQG1TfjUTE2lcw/company-logo_100_100/company-logo_100_100/0/1708592321323/rhenus_logistics_logo?e=1756339200&amp;v=beta&amp;t=pl34Wt672SG4JwGCgLY3Mk0w4SjEFfHCSNybeSGDi0E"
            companyName="Inside Sales Support"
            position="Rhenus Logistics | Internship"
            date="Jan 2025 – May 2025 | 5 mos"
            introduction="My primary tasks at Aviyel included crafting technical guides and hosting coding sessions to bridge the gap with open-source content for some of the fastest-growing projects."
          />
          <WorkCard
            logo="https://media.licdn.com/dms/image/v2/C4D0BAQERNrQoa9pguw/company-logo_100_100/company-logo_100_100/0/1631352787502?e=1756339200&amp;v=beta&amp;t=tkVPAzR6mYbvJxqNAlJvBxZ0b9XCG1q98HBxusTTgvM"
            companyName="Inside Sales Support"
            position="Rhenus Logistics | Internship"
            date="Jan 2025 – May 2025 | 5 mos"
            introduction="My primary tasks at Aviyel included crafting technical guides and hosting coding sessions to bridge the gap with open-source content for some of the fastest-growing projects."
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage