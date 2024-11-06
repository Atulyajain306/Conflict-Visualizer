import { createElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Middle from './components/Middle'
import Footer from './components/Footer'
function App() {   
  return (
    <> 
      <div>
        <Navbar/> 
      </div>
      <div className="min-h-dvh bg-slate-200  overflow-hidden">
       <Middle/></div>
       <div className=" relative top-[0vh]">
       <Footer/></div>
    </>
  )
}
export default App
