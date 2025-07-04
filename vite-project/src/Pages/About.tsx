import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Components/Header'
import '../Pages/About.css'

function About()
{
  return(
    <div className='wholePage'>
      <Header />
      <div className='TopFrame'>
        <div className='leftSection' data-aos="fade-up" data-aos-delay="200">
          <h1>I'm Wenkun Wu. I live in Montreal, where I move containers and drive smarter supply chain decisions.</h1>
          <p style={{ textIndent: '2em' }}>
            I'm a data-driven supply chain specialist who happens to own a violin, <br />
            a bass guitar, and a gym membership (the last one is more symbolic than visible, <br />
            thanks to my loyal baby fat). <br />
          </p>
          <p style={{ textIndent: '2em' }}>
            Armed with advanced Excel skills and just enough Power BI to impress my manager, <br />I tackle pricing sheets and shipment mysteries by day,
            and string instruments by night. 
          </p>
          <p style={{ textIndent: '2em' }}>
            On a totally unrelated note, I have an identical twin sister <br />
            who’s my complete opposite — she probably wouldn’t survive in logistics.
          </p>
        </div>
        <div className='rightSection' data-aos="fade-up" data-aos-delay="300">
        <img src="./public/wenkunwu.jpg" alt="wenkun wu image" />
        <div className='resume'>
            <a href="./public/WenkunWu_Resume2025.pdf">
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
        </div>
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