import React from 'react';
import SharkStriker2 from "../assets/SharkStriker2.png";
import { PiSquaresFourBold } from "react-icons/pi";
import { PiDiamondsFourBold } from "react-icons/pi";
const Navbar = () => {
  return (
    <div>
     
     <div className="h-[65px] w-full bg-black flex items-center">
  <div className="flex items-center ml-10">
    <img 
      src={SharkStriker2} 
      className="h-[28px] w-[28px] mr-2 mt-1" 
      alt="sharkstrikerlogo" 
    />
    <h1 className="text-white text-4xl font-bold md-2">STRIEGO</h1>
  </div>
</div>
      <div className="h-[60px] w-full bg-[#0e0e0e] text-white flex items-center px-10 border-t-[0.1px] border-b-[0.5px] border-gray-600">
      <div className="flex items-center justify-center h-[32px] w-[100px] bg-black border-t border-l border-r border-b-[#0e0e0e] border-gray-500 rounded-xl shadow-lg relative transition-all duration-200 ease-in hover:border-b hover:border-b-gray-500">
      <PiDiamondsFourBold className="text-xl rotate-45" />
      <span className="text-gray-300 text-md ml-4">Menu</span>
   </div>
            <div className="h-[30px] w-[2px] ml-5 bg-gray-800"></div>
            <div class="ml-4 flex items-center space-x-4 text-gray-300">
                <a href="#" class="transition-all text-sm duration-500 hover:text-blue-700">Create Dashboard
                <span>&gt;</span></a>
                <a href="#" class="transition-all text-sm duration-500 hover:text-blue-700">Saved Dashboard
                <span>&gt;</span></a>
                <a href="#" class="text-blue-700 text-sm">Report Template</a>
            </div>
      </div>
    </div>
  );
}

export default Navbar;
