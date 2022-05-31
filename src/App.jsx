import './App.css'

import Hero from './component/UI/HeroSection/Hero'
import Navbar from './component/UI/Navbar/Navbar'
import { useState } from 'react'

function App() {


  return (
    <div className='app'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
