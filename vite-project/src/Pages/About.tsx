import React, { useState } from 'react';
import Header from '../Components/Header'

function About()
{
  return(
    <div className='wholePage'>
      <Header />
      <div className='TopFrame'>
      <div className='leftSection'>
        <h1>I'm Wenkun Wu. I live in Montreal, where I move containers and drive smarter supply chain decisions.</h1>
        <p>
          I'm a data-driven supply chain specialist who happens to own a violin, a bass guitar,
          and a gym membership (the last one is more symbolic than visible, thanks to my loyal baby fat).
          Armed with advanced Excel skills and just enough Power BI to impress my manager,
          I tackle pricing sheets and shipment mysteries by day, and string instruments by night.
          On a totally unrelated note, I have an identical twin sister who’s my complete opposite —
          she probably wouldn’t survive in logistics.
        </p>
      </div>
      <div className='rightSection'></div>
      </div>
      
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
  )
}

export default About