import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Formulario } from './Form/Form'


import { ChakraProvider } from '@chakra-ui/react'
import { Navito } from './Navbar/navito'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Navito/>

    <App />

    
  </React.StrictMode>,
)
