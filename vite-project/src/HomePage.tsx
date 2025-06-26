// filepath: c:\Users\16039\Desktop\Wenkun Wu Personal website\vite-project\src\App.tsx
import React from 'react'
import Header from './Header'
import "./HomePage.css"
import IsometricBoxes from './IsometricBoxes';


function HomePage() {
  return (
    <div>
      <Header />
      <div className='wholeFrame'>
      <div className='HomePage'>
        <div className='leftSection'>
          <h1>Software engineer, technical writer & open-source maintainer</h1>
          <p>
            I'm Victor Eke, an experienced frontend developer passionate about
            learning and building open-source software that is beneficial to developers and the world at large.
          </p>
          {/* personal links */}
          <a href='#'>LinkedIn</a>
        </div>
        <div className='rightSection'>
          <IsometricBoxes />
        </div>
      </div>
      </div>
    </div>
  )
}

export default HomePage