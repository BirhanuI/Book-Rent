import { Typography } from "@mui/material";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const EarningSummary = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <div className="mb-10 bg-white flex gap-5 justify-between">
        <div className="p-5">
          <Typography variant="h6">Earning Summary</Typography>
          <div className=""></div>
        </div>
        <div className="flex gap-5 text-sm">
          <div className="flex justify-left items-center">
            <span
              className={`min-w-4 h-4 mr-2 rounded-full bg-[#006AFF]`}
            ></span>
            <span className="w-full">Last 6 Months</span>
          </div>
          <div className="flex justify-left items-center">
            <span className={`min-w-4 h-4 mr-2 rounded-full bg-[gray]`}></span>
            <span className="w-full">same period last year</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width={"100%"} height={300}>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#006AFF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#006AFF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            domain={[0, "dataMax + 500"]}
          />
          <YAxis axisLine={false} tickLine={false} />
          <CartesianGrid horizontal={false} y={3} />
          {/* <Legend content={renderLegend} verticalAlign="top" attributeName=""/> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#006AFF"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="gray"
            fillOpacity={0}
            strokeDasharray="5 5"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default EarningSummary;
