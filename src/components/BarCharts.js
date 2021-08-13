import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  linearGradient
} from "recharts";
import {Rightchart,Mis} from "./Home.style"
import {AiOutlineDownCircle} from "react-icons/ai"
const data = [
  {
    name: "Jan",
    uv: 1900,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Fab",
    uv: 2500,
    pv: 8,
    amt: 10,
  },
  {
    name: "Mar",
    uv: 1500,
    pv: 90,
    amt: 20,
  },
  {
    name: "Apr",
    uv: 1500,
    pv: 38,
    amt: 20,
  },
  {
    name: "May",
    uv: 1880,
    pv: 0,
    amt: 1,
  },
  {
    name: "Jun",
    uv: 2100,
    pv: 30,
    amt: 20,
  },
  {
    name: "Jul",
    uv: 2700,
    pv: 40,
    amt: 20,
  },
  {
    name: "Aug",
    uv: 1750,
    pv: 40,
    amt: 10,
  },
  {
    name: "Sep",
    uv: 2040,
    pv: 10,
    amt: 20,
  },
];

export default function AreaCharsE() {
  return (
      <Rightchart>
          <div>
            <span>Engine Performance</span>
            <select>
                <option>This Year</option>
                <option>Last Year</option>
            </select>
          </div>
          <div>
            <Mis>
              <h4>84%</h4>
              <h5><AiOutlineDownCircle/>-8.0%</h5> 
            </Mis>
          <ResponsiveContainer width="80%" aspect={3}>
            <AreaChart
                width={300}
                height={200}
                data={data}
                margin={{
                top: 10,
                right: 5,
                left: 20,
                bottom: 0,
                }}
            >
                <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF2F5E" stopOpacity={0.5}/>
                    <stop offset="65%" stopColor="#FF2F5E" stopOpacity={0}/>
                </linearGradient>
                </defs>
                <CartesianGrid horizontal="" vertical="" />
                <XAxis dataKey="name" horizontal="" />
                <Area
                type="monotone"
                dataKey="uv"
                stroke="#FF2F5E"
                font-weight="bold"
                fillOpacity={1}
                fill="url(#colorUv)"
                />
            </AreaChart>
            </ResponsiveContainer>
          </div>
            
      </Rightchart>
    
  );
}
