import React, { useState } from 'react';
import Header from '../Components/Header'
import '../Pages/About.css'

function About()
{
  return(
    <div className='wholePage'>
      <Header />
      <div className='TopFrame'>
      <div className='leftSection'>
        <h1>I'm Wenkun Wu. I live in Montreal, where I move containers and drive smarter supply chain decisions.</h1>
        <p>
          I'm a data-driven supply chain specialist who happens to own a violin, <br />
          a bass guitar, and a gym membership (the last one is more symbolic than visible, <br />
          thanks to my loyal baby fat). Armed with advanced Excel skills and just enough <br />
          Power BI to impress my manager, I tackle pricing sheets and shipment mysteries by day, <br />
          and string instruments by night. On a totally unrelated note, I have an identical twin sister <br />
          who’s my complete opposite — she probably wouldn’t survive in logistics.
        </p>
      </div>
      <div className='rightSection'>
        <img src="./public/wenkunwu.jpg" alt="wenkun wu image" />
        <a href="">
          View Résumé
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m13 3 3.293 3.293-7 7-1.414-1.414 7-7L21 11V3z"></path>
            <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2 2v3z"></path>
          </svg>
        </a>
        <p>wenkunwu01@gmail.com</p>
      </div>
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