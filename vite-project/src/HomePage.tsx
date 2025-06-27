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
            companyName="Rhenus Logistics"
            position="Inside Sales Support | Internship"
            date="Jan 2025 – May 2025 | 5 mos"
            introduction="My primary tasks at Aviyel included crafting technical guides and hosting coding sessions to bridge the gap with open-source content for some of the fastest-growing projects."
          />
          <WorkCard
            logo="https://media.licdn.com/dms/image/v2/C4D0BAQERNrQoa9pguw/company-logo_100_100/company-logo_100_100/0/1631352787502?e=1756339200&amp;v=beta&amp;t=tkVPAzR6mYbvJxqNAlJvBxZ0b9XCG1q98HBxusTTgvM"
            companyName="COSCO SHIPPING Lines (North America)"
            position="Sales Assistant | Internship"
            date="May 2024 – Aug 2024 | 4 mos"
            introduction="My primary tasks at Aviyel included crafting technical guides and hosting coding sessions to bridge the gap with open-source content for some of the fastest-growing projects."
          />
          <WorkCard
            logo="https://media.licdn.com/dms/image/v2/C4E0BAQHJVipjNd9UUQ/company-logo_100_100/company-logo_100_100/0/1657212585321?e=1756339200&amp;v=beta&amp;t=B7FZYiCoWGLcWcMiQNaQhUfuRQ-XPT8h96PeRlbvM2A"
            companyName="Bakertilly CGSM"
            position="Assistant Auditor | Internship"
            date="Jan 2023 – Mar 2023 | 3 mos"
            introduction="My primary tasks at Aviyel included crafting technical guides and hosting coding sessions to bridge the gap with open-source content for some of the fastest-growing projects."
          />
          <WorkCard
            logo="/public/images.png"
            companyName="Nanjing Nanshen Xidi Certified Public Accountant Co, Ltd"
            position="Assistant Auditor | Internship"
            date="Jan 2021 – Mar 2021 | 2 mos"
            introduction="My primary tasks at Aviyel included crafting technical guides and hosting coding sessions to bridge the gap with open-source content for some of the fastest-growing projects."
          />
          <WorkCard
            logo="https://media.licdn.com/dms/image/v2/C4E0BAQHFTX3sJscepw/company-logo_100_100/company-logo_100_100/0/1648551863411/_logo?e=1756339200&amp;v=beta&amp;t=LtesUz2pWzTzH44Bz3CHpkzvvsWhg9d26kPoHg1a9a0"
            companyName="Suyin Financial Leasing Co Ltd"
            position="Assistant Sales Manager | Internship"
            date="Jul 2020 – Aug 2020 | 2 mos"
            introduction="My primary tasks at Aviyel included crafting technical guides and hosting coding sessions to bridge the gap with open-source content for some of the fastest-growing projects."
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage