import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/SideBar'
import MainBar from './components/MainBar'

function App() {

  return (
    <div className='flex bg-gray-100'>
     <SideBar />
     <MainBar />
    </div>
  )
}

export default App
