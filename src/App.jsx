


import {Heading, Text, Container, Box,Flex, List,ListIcon,ListItem, FormControl, FormLabel, Input} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, BellIcon } from '@chakra-ui/icons'

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import './app.css'







function App() {

    
  return (


    <div>

      <section>

<h1 class="titulo">Santiago Mondelo</h1>


<a className='bg-image hover-overlay'>

      <Image
        src='src/Mondelo_Santiago.jpg'
        className='img-fluid rounded-pill'
        alt='example'
      />
      </a>



<p>Web developer</p>

<Button variant="primary" href="#sobremi">Quiero saber mas</Button>{' '}


</section>


<section class="section-1">
<a name="sobremi">  </a>

<div class="column1">

<p>lalalal</p>
</div>

<div class="column1">

<p>lalalal</p>
</div>

<div class="column1">

<p>lalalal</p>
</div>

</section>
      
    </div>
  )
}

export default App
