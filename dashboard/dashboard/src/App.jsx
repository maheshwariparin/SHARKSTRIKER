import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Leftnav from "./components/leftcomponent"
import Maincomponent from "./components/Maincomponent"
import RightComponent from './components/rightComponent'
import Secondnav from './components/secondnav'
import ChartComponent from "./components/Chart"
function App() {

  return (
     <div className='w-full bg-black'>
    <div className='bg-white '>
     <Navbar/>
     <Secondnav/>
     </div>

    <div className='flex justify-between'>
     <div className='h-[65%] w-1/3 mt-2'>
     <Leftnav/>
     </div>

     <div className='h-[65%] w-1/3 mt-2'>
      <Maincomponent/>
     </div>
    
     <div className='h-[500px] w-1/3 mt-2'>
      <RightComponent/>
     </div>
     </div>
     
     <div className='bg-white mt-[-53px]'>
    <ChartComponent/>
     </div>

     </div>
  
  )
}

export default App
