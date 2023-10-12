import React, { useEffect, PureComponent } from "react";
import { useMain } from "../contexts/mainContext";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
function Home() {
  const { getMainData, mainData, percentData, mainDataForPie } = useMain();

  useEffect(() => {
    getMainData();
  }, []);

  const data = [
    { name: "Deaths", value: mainDataForPie.deaths },
    { name: "Active", value: mainDataForPie.active },
    { name: "recovered", value: mainDataForPie.recovered },
  ];
  const COLORS = ["#ef4444", "#9ca3af", "#22c55e"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const roundedNumber = percent.toFixed(3) * 100;

    percentData.push(roundedNumber);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="flex flex-col items-center w-full h-auto ">
      <h1 className="text-4xl font-extrabold w-full pt-[4rem] pl-[11%] max-sm:pl-[16%]">
        Global Situation
      </h1>
      <div className="flex flex-row h-auto gap-[2%] w-full p-[5%] max-sm:flex-col justify-center ">
        <div className="card mb-[2%] min-w-[15rem] max-sm:w-[100%] bg-blue-400 w-[20%] h-[12rem] text-primary-content flex justify-center items-center gap-5">
          <h2 className="card-title">Confirmed cases</h2>
          <div>Total {mainData.cases}</div>
        </div>
        <div className="card mb-[2%] min-w-[15rem] max-sm:w-[100%] bg-red-500 w-[20%] h-[12rem] text-primary-content flex justify-center items-center gap-5">
          <h2 className="card-title">Deaths</h2>
          <div>Total {mainData.deaths}</div>
        </div>
        <div className="card mb-[2%] min-w-[15rem] max-sm:w-[100%] bg-gray-400 w-[20%] h-[12rem] text-primary-content flex justify-center items-center gap-5">
          <h2 className="card-title">Active</h2>
          <div>Total {mainData.active}</div>
        </div>
        <div className="card mb-[2%] min-w-[15rem] max-sm:w-[100%] bg-green-500 w-[20%] h-[12rem] text-primary-content flex justify-center items-center gap-5">
          <h2 className="card-title">Recovered</h2>
          <div>Total {mainData.recovered}</div>
        </div>
      </div>
      <div className="w-full min-h-[25rem] flex items-center justify-center max-sm:flex-col max-sm:gap-6 ">
        <div className="w-[50%] max-sm:w-[100%] h-[25rem]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={200}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="">
          <div className="card mb-[2%] min-w-[15rem] max-sm:w-[100%] bg-green-500 w-[20%] h-[4rem] text-primary-content flex justify-center items-center ">
            <h2 className="card-title">Recovered</h2>
            <div>Total {percentData[2]} %</div>
          </div>
          <div className="card mb-[2%] min-w-[15rem] max-sm:w-[100%] bg-gray-400 w-[20%] h-[4rem] text-primary-content flex justify-center items-center">
            <h2 className="card-title">Active</h2>
            <div>Total {percentData[3]} %</div>
          </div>
          <div className="card mb-[2%] min-w-[15rem] max-sm:w-[100%] bg-red-500 w-[20%] h-[4rem] text-primary-content flex justify-center items-center">
            <h2 className="card-title">Deaths</h2>
            <div>Total {percentData[1]} %</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
