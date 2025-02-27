import React from 'react'
import dashboard from "../assets/dashboard.jpeg"

const Card = () => {
  return (
    <div>
<div 
  className="relative  max-w-md w-65 px-4 py-4 border-1 border-[#2E2E5A] border-opacity-90 rounded-xl bg-gradient-to-b  from-[#2E2E5A]/90 to-black text-gray-300 hover:border-blue-700  transition-all duration-300 group"
>
  <img src={dashboard} alt="Dashboard Preview" className="w-full rounded-lg" />

  <div className="mt-4">
    <h2 
      className="text-lg font-bold transition-all duration-300 group-hover:text-blue-500"
    >
      Risk Overview
    </h2>
    <h3 
      className="text-md text-gray-400 transition-all duration-300 group-hover:text-gray-100"
    >
      Executive Dashboard
    </h3>
    <p 
      className="mt-2 text-xs text-gray-400 transition-all duration-300 group-hover:text-gray-200"
    >
      Lorem ipsum dolor sit amet consectetur. Nisl ullamcorper nisl viverra in justo tellus dolor sed. 
      Purus quisque mi adipiscing risus. Vestibulum pharetra at orci lectus.
    </p>
    <div className="flex items-center w-full ml-1 mt-3">
  <div className="w-70  h-[2px] bg-[#2E2E5A]"></div>
</div>

    <div className="flex space-x-4 mt-4">
      <button 
        className="px-[7px] py-2 border text-xs border-[#2E2E5A] text-[#2E2E5A] rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
      >
        View CSV Fields
      </button>
      <button 
        className="px-[7px] py-2 border text-xs border-[#2E2E5A] text-[#2E2E5A] rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
      >
        View PDF Sample
      </button>
    </div>
  </div>
</div>


    </div>
  )
}

export default Card