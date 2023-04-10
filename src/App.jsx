import { useState } from 'react'
import  NavBar  from './components/NavBar2/NavBar'
import  NavTop  from './components/NavBar2/NavTop'
import Hero from './components/Hero/Hero'
import WhatWeDo from './components/WhatWeDo/WhatWeDo'
import ReasonToChooseUs from './components/ReasonToChooseUs/ReasonToChooseUs'

function App() {

  return (
    <div >
      <NavTop></NavTop>
      <NavBar/>
      <Hero/>
      <WhatWeDo></WhatWeDo>
      <ReasonToChooseUs/>
    </div>
  )
}

export default App
