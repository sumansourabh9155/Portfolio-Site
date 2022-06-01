import './App.css'

import { HelpU } from './component/UI/HelpUi/HelpU';
import HeroSection from "./component/UI/HeroSection/HeroSection";
import Navbar from './component/UI/Navbar/Navbar'
import WhatIDo from './component/UI/WhatIDo/WhatIDo';
import { useState } from 'react'

function App() {


  return (
    <div className='app'>
      <Navbar />
      <HeroSection />
      <WhatIDo />
      <HelpU />
    </div>
  )
}

export default App
