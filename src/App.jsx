import './App.css'

import HeroSection from "./component/UI/HeroSection/HeroSection";
import Navbar from './component/UI/Navbar/Navbar'
import { useState } from 'react'

function App() {


  return (
    <div className='app'>
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default App
