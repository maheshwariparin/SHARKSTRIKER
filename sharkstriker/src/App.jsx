import React from 'react';
import Navbar from './components/navbar';
import Card from './components/Card.jsx'
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
const App = () => {
  const [firstisClicked, setfirstIsClicked] = useState(true);
  const [secondisClicked, setsecondIsClicked] = useState(false);
  const [thirdisClicked, setthirdIsClicked] = useState(false);
  const [forthisClicked, setforthIsClicked] = useState(false);
  return (
    <div className="bg-black min-h-screen h-[2000px] w-[1735px]">

    <div className="fixed top-0 left-0 w-full z-50">
      <Navbar />
    </div>
  
    <div className="pt-[125px] w-[1735px]"> 
      <div className="relative flex mt-5 ml-10">
      <div
      className={`h-[35px] flex items-center justify-center rounded-t-lg transition-colors duration-600 ${
        firstisClicked
          ? 'bg-transparent text-blue-700'
          : 'bg-transparent text-gray-300 hover:bg-blue-900/30 hover:text-blue-700'
      }`}
      onClick={() => setfirstIsClicked(true)}
    >
      <a href="#" className="p-3 text-center text-md">
      Report Template
      </a>
    </div>
        <div
      className={`h-[35px] flex items-center justify-center rounded-t-lg transition-colors duration-600 ${
        secondisClicked
          ? 'bg-transparent text-blue-700'
          : 'bg-transparent text-gray-300 hover:bg-blue-900/30 hover:text-blue-700'
      }`}
      onClick={() => setsecondIsClicked(true)}
    >
      <a href="#" className="p-3 text-center text-md">
      AI Security
      </a>
    </div>
        <div
      className={`h-[35px] flex items-center justify-center rounded-t-lg transition-colors duration-600 ${
        thirdisClicked
          ? 'bg-transparent text-blue-700'
          : 'bg-transparent text-gray-300 hover:bg-blue-900/30 hover:text-blue-700'
      }`}
      onClick={() => setthirdIsClicked(true)}
    >
      <a href="#" className="p-3 text-center text-md">
      Pre-Release Features
      </a>
    </div>
          <div
      className={`h-[35px] flex items-center justify-center rounded-t-lg transition-colors duration-600 ${
        forthisClicked
          ? 'bg-transparent text-blue-700'
          : 'bg-transparent text-gray-300 hover:bg-blue-900/30 hover:text-blue-700'
      }`}
      onClick={() => setforthIsClicked(true)}
    >
      <a href="#" className="p-3 text-center text-md">
        Saved Dashboards
      </a>
    </div>
      </div>
  
      <div className="flex items-center  ml-10 ">
        <div className="w-35 h-px bg-blue-700"></div>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
  
      <div className='flex mt-5 ml-10 gap-5'>
        <div className="flex items-center justify-between w-64 px-4 py-2 rounded-lg bg-[#0e0e0e] text-gray-500 border border-gray-700 hover:border-gray-400 hover:shadow-md transition-all duration-300">
          <span className="text-sm">Your Name</span>
          <IoIosArrowDown className='text-sm' />
        
        </div>
  
        <div className="flex items-center justify-between w-64 px-4 py-2 rounded-lg bg-[#0e0e0e] text-gray-500 border border-gray-700 hover:border-gray-400 hover:shadow-md transition-all duration-300">
          <span className="text-sm">Sub-Category</span>
          <IoIosArrowDown className='text-sm' />
          
        </div>
  
        <div className="flex items-center justify-between w-64 px-4 py-2 rounded-lg bg-[#0e0e0e] text-gray-500 border border-gray-700 hover:border-gray-400 hover:shadow-md transition-all duration-300">
          <span className="text-sm">Type</span>
          <IoIosArrowDown className='text-sm' />
          
        </div>
      </div>
  
      <div className='ml-10 mt-5'>
        <div className='flex gap-5'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        <div className='flex gap-5 mt-5'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
      </div>
    </div>
  </div>
  

  );
};

export default App;

