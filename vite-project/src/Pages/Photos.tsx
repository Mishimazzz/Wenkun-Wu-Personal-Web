import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Components/Header'
import '../Pages/Photos.css'

function Photos()
{
  return(
    <div className='wholePage'>
      <Header />
      <p className='photo-text'> Still working on it ...😉</p>
      <footer>
        <div className="footer-content">
          <div className='left-footer'>
            <p>
              Built with:
              <img src="./public/React-icon.svg.png" alt="" />React,
              <img src="./public/typescript_Image.png" alt="" />TypeScript
            </p>
          </div>
          <div className='right-footer'>
            <p>
              Copyright © Yueyan Ying 2025 All rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Photos