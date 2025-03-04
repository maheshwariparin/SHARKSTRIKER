import React from 'react';
import globe from "../../public/BluePlanet.svg";

const Global = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-900">
      <div className="w-64 h-64">
        <img
          src={globe}
          alt="Globe"
          className="w-full h-full animate-[spin_20s_linear_infinite]"
        />
      </div>


    </div>
  );
};

export default Global;



