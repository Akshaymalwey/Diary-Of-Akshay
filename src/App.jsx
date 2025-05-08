import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import About1 from './Components/About1'
import Theme from './Components/Theme'
import Love from './Components/Love'

import "./App.css"



const App = () => {
  return (
    <div className='container'>
      <Hero />
      <About />
      <About1 />
      <Theme />
      <Love />
    </div>
  )
}

export default App
