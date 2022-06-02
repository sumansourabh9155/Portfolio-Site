import './App.css'

import { HelpU } from './component/UI/HelpUi/HelpU';
import HeroSection from "./component/UI/HeroSection/HeroSection";
import Navbar from './component/UI/Navbar/Navbar'
import WhatIDo from './component/UI/WhatIDo/WhatIDo';
import { useState } from 'react'

function App() {


  return (
    <div className='lg:pl-18 lg:pr-18 md:pl-10 md:pr-10 pl-1 pr-1'>
      <Navbar />
      <HeroSection />
      <WhatIDo />
      <HelpU />
    </div>
  )
}

export default App
