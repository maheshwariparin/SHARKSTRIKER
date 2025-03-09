import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area } from "recharts";

const data = Array.from({ length: 30 }, (_, i) => ({
  time: `${String(i).padStart(2, '0')}:00`,
  value1: Math.floor(Math.random() * 100) + 50,
  value2: Math.floor(Math.random() * 80) + 40,
  value3: Math.floor(Math.random() * 60) + 30,
}));

const ChartComponent = () => {
  return (
    <div className="w-full h-[90px] bg-[#0f172a] border border-white">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" tick={{ fill: "#9ca3af", fontSize: 10 }} />
          <YAxis hide />
          <Tooltip />
          <Area type="monotone" dataKey="value1" stroke="#14b8a6" fill="#14b8a680" />
          <Area type="monotone" dataKey="value2" stroke="#f43f5e" fill="#f43f5e80" />
          <Area type="monotone" dataKey="value3" stroke="#3b82f6" fill="#3b82f680" />
          <Line type="monotone" dataKey="value1" stroke="#14b8a6" dot={{ fill: "#14b8a6" }} />
          <Line type="monotone" dataKey="value2" stroke="#f43f5e" dot={{ fill: "#f43f5e" }} />
          <Line type="monotone" dataKey="value3" stroke="#3b82f6" dot={{ fill: "#3b82f6" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;

