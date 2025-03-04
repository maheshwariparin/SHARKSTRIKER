import React, { useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaKey } from "react-icons/fa";

const staticData = [
  { x: 10, y: 10 },
  { x: 20, y: 20 },
  { x: 30, y: 30 },
  { x: 40, y: 40 },
  { x: 50, y: 50 },
  { x: 60, y: 60 },
  { x: 70, y: 70 },
  { x: 80, y: 80 },
  { x: 90, y: 90 },
];

const RightComponent = () => {
  const [score, setScore] = useState(77);

  return (
    <div className="bg-[#061E2F] text-white p-2 rounded-l-3xl w-full h-[440px]">
      <div className="flex justify-center items-center mt-0.5">
        <label className="text-sm">Top Security Events</label>
        <select className="bg-gray-700 text-white text-sm ml-1 rounded">
          <option value="100">100</option>
        </select>
      </div>

      <div className="mt-4 justify-center flex">
        <span className="bg-red-500/50 h-[20px] w-[45px] border mr-0.5 border-red-500 text-xs"></span>
        <p className='text-xs'>Dataset 1</p>
      </div>

      <ResponsiveContainer width="100%" height={270}>
  <ScatterChart margin={{ top: 10, right: 7, bottom: 30, left: 20 }}>
    <CartesianGrid stroke="#444" strokeDasharray="0 0" /> 
    <XAxis 
      type="number" 
      dataKey="x" 
      domain={[0, 90]} 
      ticks={[0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90]} 
      axisLine={false} 
      label={{ value: 'Severity', position: 'bottom', fill: '#ffffff', fontSize: 15 }} 
    />
    <YAxis 
  type="number" 
  dataKey="y" 
  domain={[0, 90]} 
  ticks={[0, 15, 30, 45, 60, 75, 90]} 
  axisLine={false} 
  label={{ value: 'Fidelity', angle: -90, position: 'insideLeft', fill: '#ffffff', fontSize: 15 }} 
/>

    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
    <Scatter name="Dataset 1" data={staticData} fill="#FF6384" />
  </ScatterChart>
</ResponsiveContainer>



      <div className="flex items-center mt-1">
        <span className="text-yellow-400 text-xl"><FaKey /></span>
        <div className="ml-7">
          <h4 className="text-sm">Private to Private Exploit Anomaly</h4>
          <p className="text-xs text-white"><BsFillInfoCircleFill /></p>
        </div>

        <div 
          className="ml-15  border border-white text-white p-0.5 "
        >
          {score} score
        </div>

        <div 
          className="ml-2  text-white p-1 "
        >
           <MdOutlineKeyboardArrowDown  className="ml-2" />
        </div>

      </div>
    </div>
  );
};

export default RightComponent;
