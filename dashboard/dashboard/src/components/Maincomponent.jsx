// import React from 'react';
// import globe from "../../public/BluePlanet.svg";
// const Maincomponent = () => {

//   const colors = [
//     "bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500", 
//     "bg-teal-500", "bg-blue-500", "bg-indigo-500", "bg-purple-500", "bg-pink-500"
//   ];
//   return (
//     <div className="flex flex-col w-[400px] h-[550px] items-center justify-center  bg-black
//      text-white">
//       <div className="flex space-x-3 mb-2 mt-[-140px]">
//         <div className="w-30 h-15 bg-slate-800 rounded-tl-full flex flex-col items-center justify-center">
//           <h3 className="text-xs">ML-IDS</h3>
//           <p className="text-xs">2 / 2 21k</p>
//         </div>
//         <div className="w-30 h-15 bg-slate-800  flex flex-col items-center justify-center">
//           <h3 className="text-xs">TRAFFIC ANOMALIES</h3>
//           <p className="text-xs">31 / 220</p>
//         </div>
//         <div className="w-30 h-15 bg-slate-800 rounded-tr-full flex flex-col items-center justify-center">
//           <h3 className="text-xs">MALWARE SANDBOX</h3>
//           <p className="text-xs">0 / 0</p>
//         </div>
//       </div>

//       <div className="relative w-[300px] h-[300px] flex items-center justify-center">
//           <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden rotate-[162deg]">
//                 {colors.map((color, index) => {
//                   // Remove bottom 3 slices
//                   if (index >= colors.length - 3) return null;
        
//                   return (
//                     <div
//                       key={index}
//                       className={`absolute w-full h-full ${color}`}
//                       style={{
//                         clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos((index * 36 * Math.PI) / 180)}% ${50 + 50 * Math.sin((index * 36 * Math.PI) / 180)}%, ${50 + 50 * Math.cos(((index + 1) * 36 * Math.PI) / 180)}% ${50 + 50 * Math.sin(((index + 1) * 36 * Math.PI) / 180)}%)`,
//                         borderRadius: "50%",
//                       }}
//                     ></div>
//                   );
//                 })}
                
//                 <div className="absolute w-1/2 h-1/2  top-1/4 left-1/4">
//                   <img
//                     src={globe}
//                     alt="Globe"
//                     className="w-full h-full animate-[spin_20s_linear_infinite] rounded-full"
//                   />
//                 </div>
            
//          </div>
//       </div>

//       <div className="flex space-x-4 mt-[-45px]">
//         <div className="w-30 h-15 bg-slate-800 rounded-bl-full flex flex-col items-center justify-center">
//           <h3 className="text-xs">FOUND ASSETS</h3>
//           <p className="text-xs">0 / 4 / 1715</p>
//         </div>
//         <div className="w-30 h-15 bg-slate-800  flex flex-col items-center justify-center">
//           <h3 className="text-xs">UBA DETECTIONS</h3>
//           <p className="text-xs">0 / 0</p>
//         </div>
//         <div className="w-30 h-15 bg-slate-800 rounded-br-full flex flex-col items-center justify-center">
//           <h3 className="text-xs">DAILY DATA INGESTED</h3>
//           <p className="text-xs">11.78 / 1000</p>
//         </div>
//       </div>

      
//     </div>
//   );
// };

// export default Maincomponent;

























import React from 'react';
import globe from "../../public/BluePlanet.svg";
const Maincomponent = () => {

  const colors = [
    "bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500", 
    "bg-teal-500", "bg-blue-500", "bg-indigo-500", "bg-purple-500", "bg-pink-500"
  ];
  return (
    <div className="flex flex-col w-[400px] h-[450px] items-center justify-center  bg-black
     text-white">
      <div className="flex space-x-3 mb-2 mt-[-65px]">
        <div className="w-30 h-12 bg-slate-800 rounded-tl-full flex flex-col items-center justify-center">
          <h3 className="text-[10px]">ML-IDS</h3>
          <p className="text-[10px]">2 / 2 21k</p>
        </div>
        <div className="w-30 h-12 bg-slate-800  flex flex-col items-center justify-center">
          <h3 className="text-[10px]">TRAFFIC ANOMALIES</h3>
          <p className="text-[10px]">31 / 220</p>
        </div>
        <div className="w-30 h-12 bg-slate-800 rounded-tr-full flex flex-col items-center justify-center truncare">
          <h3 className="text-[10px] mr-4">MALWARE SANDBOX</h3>
          <p className="text-[10px]">0 / 0</p>
        </div>
      </div>

      <div className="relative w-[300px] h-[300px] flex items-center justify-center">
          <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden rotate-[162deg]">
                {colors.map((color, index) => {
                  // Remove bottom 3 slices
                  if (index >= colors.length - 3) return null;
        
                  return (
                    <div
                      key={index}
                      className={`absolute w-full h-full ${color}`}
                      style={{
                        clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos((index * 36 * Math.PI) / 180)}% ${50 + 50 * Math.sin((index * 36 * Math.PI) / 180)}%, ${50 + 50 * Math.cos(((index + 1) * 36 * Math.PI) / 180)}% ${50 + 50 * Math.sin(((index + 1) * 36 * Math.PI) / 180)}%)`,
                        borderRadius: "50%",
                      }}
                    ></div>
                  );
                })}
                
                <div className="absolute w-1/2 h-1/2  top-1/4 left-1/4">
                  <img
                    src={globe}
                    alt="Globe"
                    className="w-full h-full animate-[spin_20s_linear_infinite] rounded-full"
                  />
                </div>
            
         </div>
      </div>

      <div className="flex space-x-4 mt-[-45px]">
        <div className="w-30 h-12 bg-slate-800 rounded-bl-full flex flex-col items-center justify-center">
          <h3 className="text-[10px]">FOUND ASSETS</h3>
          <p className="text-[10px]">0 / 4 / 1715</p>
        </div>
        <div className="w-30 h-12 bg-slate-800  flex flex-col items-center justify-center">
          <h3 className="text-[10px]">UBA DETECTIONS</h3>
          <p className="text-[10px]">0 / 0</p>
        </div>
        <div className="w-30 h-12 bg-slate-800 rounded-br-full flex flex-col items-center justify-center">
          <h3 className="text-[10px]">DAILY DATA INGESTED</h3>
          <p className="text-[10px]">11.78 / 1000</p>
        </div>
      </div>

      
    </div>
  );
};

export default Maincomponent;
