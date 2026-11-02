// ENTRY POINT: the first file that runs. It mounts <App /> into #root.
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/layout.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter lets React swap "pages" without reloading the browser */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
