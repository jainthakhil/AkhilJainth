import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Home from './components/Home'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Work/>
      <Skills/>
      <Contact/>
      
    </>
  )
}

export default App
