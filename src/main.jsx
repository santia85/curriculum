import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './App.css'

import { Navito } from './Navbar/navito'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Navito/>

    <App />

    
  </React.StrictMode>,
)
