import { useState } from "react";
import { FaSearch, FaBell, FaHeart, FaQuestionCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsFillHeartbreakFill } from "react-icons/bs";
import { LuBellRing } from "react-icons/lu";
export default function Navbar() {
  
 

  const [activeItem, setActiveItem] = useState("Dashboard");

  const navItems = [
    "Dashboard",
    "Collect",
    "Detect",
    "Investigate",
    "Respond",
    "Configure",
    "Admin",
  ];

  return (
    <div className="bg-[#142a37] p-1  items-center justify-between flex">
      <div className="flex items-center space-x-6">
        <div className="text-white flex flex-col text-md font-bold">
          <span className="text-white">STELLAR</span>
          <p className="text-white text-xs ml-5 tracking-widest">CYBER</p>
        </div>
         
        <div className="text-white flex flex-col text-md font-bold">
          <span className="text-[#FFA500]">STARLIGHT</span>
          <span className="text-[#FFA500] text-xs">Command Center</span>
        </div>
       </div>


       <nav className="flex space-x-4 text-[#FFA500]">
  {navItems.map((item) => (
    <><div
      key={item}
      onClick={() => setActiveItem(item)}
      className={`cursor-pointer text-sm ${activeItem === item ? "text-white" : ""}`}
    >
      <a className="hover:underline">{item} </a>
      {activeItem === item && (
        <div className="mt-2 h-0.5 bg-white w-full"></div>
      )}
    </div><div className="w-[0.5px] h-4 bg-gray-400 mt-1"></div></>

  ))}
</nav>

        {/* flex space-x-4 text-[#FFA500]" */}

        <div className="flex items-center space-x-1 text-white">
        <button className="flex items-center text-sm border border-transparent bg-transparent text-white  rounded">
        Marketing1  <MdOutlineKeyboardArrowDown className="ml-2" />
      </button>
      <div className="w-[0.5px] h-4 bg-gray-400 mt-1"></div>
      <button className="flex items-center px-4  text-sm border border-transparent bg-transparent text-white  rounded">
        All Tanant <MdOutlineKeyboardArrowDown  className="ml-2" />
      </button>
      <div className="w-[0.5px] h-4 bg-gray-400 mt-1"></div>
          <LuBellRing  className="ml-1"  />
          <div className="w-[0.5px] h-4 bg-gray-400 mt-1"></div>
          <BsFillHeartbreakFill  className="text-[#FFA500] ml-1" />
          <div className="w-[0.5px]  h-4 bg-gray-400 mt-1"></div>
          <FaQuestionCircle className="ml-1 text-yellow-200" />
        </div>
      </div>

     
        

    
  );
}
