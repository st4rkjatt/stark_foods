import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Heading from './components/Heading'
import Food from './components/Food'
import DashboardT from './components/DashboardT'
import Footer from './components/Footer'

function App() {


  return (
   <>
   <Navbar/>
   <Hero/>
   <Heading/>
   <Food/>
   <Footer/>
   {/* <DashboardT/> */}
   </>
  )
}

export default App
