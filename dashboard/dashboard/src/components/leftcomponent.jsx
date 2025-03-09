import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { FaCopy } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const staticData = [
    { aspect: 'TRAFFIC', value: 5.0 },
    { aspect: 'RECON', value: 4.8 },
    { aspect: 'DELIVERY', value: 4.9 },
    { aspect: 'EXPLOIT', value: 4.7 },
    { aspect: 'INSTALL', value: 4.5 },
    { aspect: 'C&C', value: 4.2 },
    { aspect: 'ACTIONS', value: 0 },
];

const assetList = [
    { ip: '10.0.1.39', risk: 98.7 },
    { ip: '10.0.1.40', risk: 97.3 },
    { ip: '10.0.1.41', risk: 95.2 },
    { ip: '10.0.1.42', risk: 93.8 },
    { ip: '10.0.1.43', risk: 92.5 },
];

const Leftnav = () => {
    const [data, setData] = useState(staticData);

    useEffect(() => {
        const interval = setInterval(() => {
            setData((prevData) => 
                prevData.map((item) => ({
                    ...item,
                    value: (Math.random() * (5.5 - 4.0) + 4.0).toFixed(1),
                }))
            );
        }, 3000);
    
        return () => clearInterval(interval);
    }, []);
    

    return (
   <div className="w-[400px] h-[440px] p-3 bg-[#142a37] text-white rounded-r-3xl ">
    <h2 className="text-lg text-center mb-3">Current to Suspect Assets</h2>
    <RadarChart cx={165} cy={100} outerRadius={80} width={300} height={200} data={data}>
    <PolarGrid />
    <PolarAngleAxis dataKey="aspect" tick={{ fill: "#ffffff", fontSize: 12}} />
    <PolarRadiusAxis angle={90} domain={[0, 6]} />
    <Radar 
        name="Risk" 
        dataKey="value" 
        stroke="#ff3434" 
        fill="#ff3434" 
        fillOpacity={0.3} 
        isAnimationActive={true} 
        animationBegin={0} 
        animationDuration={1000} 
        animationEasing="ease-in-out" 
        dot={{ stroke: "#ff3434", fill: "#ff3434", r: 3 }}
    />
</RadarChart>

<button className="mb-3 bg-[#2f5971] hover:bg-blue-700 ml-75">Expand All</button>

<div 
  className="max-h-[calc(2*72px)] overflow-y-auto scrollbar scrollbar-thumb-[#14b8a6] scrollbar-track-[#0f172a] scrollbar-thumb-rounded-lg scrollbar-w-2">
    {assetList.map((asset, index) => (
        <div 
            key={index}
            className="flex items-center justify-between p-3 mb-2 bg-[#1b263b] rounded-lg relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center border border-red-600 text-red-600 rounded-full">
                    {asset.risk}
                </div>
                <div className="ml-3 gap-2 flex">
                    <p className="text-md">{asset.ip}</p>
                    <FaCopy />
                    <span className="text-xs bg-[#2f5971] px-2 py-1 rounded">Panoramic</span>
                </div>
            </div>
            <button className="text-gray-400">
                <MdOutlineKeyboardArrowDown className="ml-2" />
            </button>

            {/* Horizontal line */}
            {index !== assetList.length - 1 && (
                <div className="absolute bottom-[-8px] left-0 w-full h-[1px] bg-[#2f5971]" />
            )}
        </div>
    ))}
</div>

</div>
        
    );
};

export default Leftnav;
