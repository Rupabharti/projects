import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
  <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
     </>
  )
}

export default App