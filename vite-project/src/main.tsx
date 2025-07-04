import React from 'react'
import ReactDOM from 'react-dom/client'
import './Pages/index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Photos from './Pages/Photos';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/Homepage' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/photos' element={<Photos />} />
      </Routes>
    </Router>
  </React.StrictMode>
)