import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { PiNotePencil } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
const Secondnav = () => {
  const [query, setQuery] = useState("none");
  const [sensor, setSensor] = useState("All Sensor");
  const [timeType, setTimeType] = useState("relative");
  const [timeInterval, setTimeInterval] = useState("last 5 hours");
  const [autoRefresh, setAutoRefresh] = useState("none");

  return (
    <div className="flex items-center justify-between space-x-4 bg-[#252324] p-1">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="px-2 py-1 w-90 rounded bg-[#2B3A4A] border border-gray-100 text-white text-sm outline-none"
        />
        <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white" />
      </div>

      <div className="flex items-center space-x-2">
        <span className="bg-[#434142] text-gray-400 p-0.5 rounded border-gray-200 border  outline-none flex flex-col text-xs">
          Saved Queries
          <select
            className="bg-[#434142] text-white rounded outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          >
            <option>{query}</option>
          </select>
        </span>


       
        <span className="bg-[#142a37] text-white p-2 rounded border-gray-200 border outline-none flex flex-col text-xs">
        <PiNotePencil className='text-xl text-white'/>
          
        </span>

        <span className="bg-[#434142] text-gray-400 p-0.5 border-gray-200 border rounded outline-none flex flex-col text-xs">
          Sensor
          <select
            className="bg-[#434142] text-white rounded outline-none"
            value={sensor}
            onChange={(e) => setSensor(e.target.value)}
          >
            <option>{sensor}</option>
          </select>
        </span>

        <span className="bg-[#434142] text-gray-400 p-0.5 border-gray-200 border rounded outline-none flex flex-col text-xs">
          Time Type
          <select
            className="bg-[#434142] text-white rounded outline-none"
            value={timeType}
            onChange={(e) => setTimeType(e.target.value)}
          >
            <option>{timeType}</option>
          </select>
        </span>

        <span className="bg-[#434142] text-gray-400 p-0.5 border-gray-200 border rounded outline-none flex flex-col text-xs">
          Time Interval
          <select
            className="bg-[#434142] text-white rounded outline-none"
            value={timeInterval}
            onChange={(e) => setTimeInterval(e.target.value)}
          >
            <option>{timeInterval}</option>
          </select>
        </span>

        <span className="bg-[#434142] text-gray-400 p-0.5 border-gray-200 border rounded outline-none flex flex-col text-xs">
          Auto Refresh
          <select
            className="bg-[#434142] text-white rounded outline-none"
            value={autoRefresh}
            onChange={(e) => setAutoRefresh(e.target.value)}
          >
            <option>{autoRefresh}</option>
          </select>
        </span>
        <div className="bg-[#142a37] text-white h-9 rounded border-gray-200 border outline-none flex flex-col text-xs">
        <BsThreeDotsVertical  className='text-lg mt-2 text-white'/>
        </div>
      </div>
    </div>
  );
};

export default Secondnav;
