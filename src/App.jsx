import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import About1 from './Components/About1'
import Theme from './Components/Theme'
import Love from './Components/Love'
import Hate from './Components/Hate'
import Happy from './Components/Happy'

import "./App.css"



const App = () => {
  return (
    <div className='container'>
      <Hero />
      <About />
      <About1 />
      <Theme />
      <Love />
      <Hate />
      <Happy />
    </div>
  )
}

export default App
