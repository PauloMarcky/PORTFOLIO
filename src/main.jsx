// ENTRY POINT: the first file that runs. It mounts <App /> into #root.
// There is no router anymore: the whole site is ONE page, so nothing needs to swap URLs.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/layout.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
