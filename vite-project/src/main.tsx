// 连接所有page的页面，只需要挂在这里就可以（import）
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './HomePage'

// free to add any tsx inside, will show up directly
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
)