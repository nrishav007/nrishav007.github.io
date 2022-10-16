import React from 'react'
import {Routes,Route} from "react-router-dom";
import { About } from './About';
import { Contact } from './Contact';
import { Home } from './Home';
import { Projects } from './Projects';
import { Skills } from './Skills';
const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
    </Routes>
  )
}

export default Allroutes