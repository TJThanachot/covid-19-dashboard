import React, { useEffect, PureComponent } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  BarChart,
} from "recharts";

import { useMain } from "../contexts/mainContext";

function Chart() {
  const { getHistorical, groupDataByYear } = useMain();
  useEffect(() => {
    getHistorical();
  }, []);
  // console.log(groupDataByYear);
  const data = [
    {
      name: "2020",
      cases: groupDataByYear.year2020?.cases,
      deaths: groupDataByYear.year2020?.deaths,
      recovered: groupDataByYear.year2020?.recovered,
    },
    {
      name: "2021",
      cases: groupDataByYear.year2021?.cases,
      deaths: groupDataByYear.year2021?.deaths,
      recovered: groupDataByYear.year2021?.recovered,
    },
    {
      name: "2022",
      cases: groupDataByYear.year2022?.cases,
      deaths: groupDataByYear.year2022?.deaths,
      recovered: groupDataByYear.year2022?.recovered,
    },
    {
      name: "2023",
      cases: groupDataByYear.year2023?.cases,
      deaths: groupDataByYear.year2023?.deaths,
      recovered: groupDataByYear.year2023?.recovered,
    },
  ];
  return (
    <div className="flex flex-col items-center w-full h-auto ">
      <h1 className="text-4xl font-extrabold w-full pt-[4rem] pl-[11%] max-sm:pl-[16%]">
        Chart
      </h1>
      <div className="w-[70%] h-[30rem] mt-[5rem]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 50,
              right: 30,
              left: 80,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cases" stroke="#2563eb" />
            <Line type="monotone" dataKey="recovered" stroke="#22c55e" />
            <Line type="monotone" dataKey="deaths" stroke="#ef4444" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="w-[70%] h-[30rem] mt-[5rem]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 80,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cases" fill="#2563eb" />
            <Bar dataKey="recovered" fill="#22c55e" />
            <Bar dataKey="deaths" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
