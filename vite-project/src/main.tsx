// 连接所有page的页面，只需要挂在这里就可以（import）
import React from 'react'
import ReactDOM from 'react-dom/client'
import './Pages/index.css'
// Make sure the file exists at the correct path and with the correct casing
import HomePage from './Pages/HomePage'

// free to add any tsx inside, will show up directly
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
)