import { Divider, Typography } from "@mui/material";
import Header from "../../components/adminHeader";
import Sidebar from "../../components/sidebar";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import BookStatusTable from "./bookStatusTable";
import EarningSummary from "./earningSummary";

const BookChart = () => {
  const data = [
    { name: "Business", value: 26 },
    { name: "Self Help", value: 20 },
    { name: "Fiction", value: 54 },
  ];
  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <ul>
        {payload.map((entry, index) => (
          <li key={`item-${index}`} className="flex justify-left items-center">
            <span
              style={{ backgroundColor: entry.color }}
              className={`min-w-4 h-4 mr-2 rounded-full`}
            ></span>
            <span className="w-full">{entry.value}</span>
            <span className="w-full text-end">{entry.payload.value}</span>
          </li>
        ))}
      </ul>
    );
  };
  const COLORS = ["#FF2727", "#52C93F", "#006AFF"];
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart margin={{ top: -80, right: 0, bottom: 0, left: 0 }}>
          <Legend content={renderLegend} />
          <Pie
            data={data}
            cx={120}
            cy={200}
            innerRadius={57}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={0}
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
  );
};
const AdminDashboard = () => {
  return (
    <div
      className="bg-[#F0F2FF] p-3  flex gap-5"
      style={{ position: "relative" }}
    >
      <Sidebar />
      <main className="w-full flex flex-col gap-5 ">
        <Header title={"Dashboard"} />
        <div className="flex gap-5 w-full h-full relative">
          <div className="bg-white w-1/4 min-w-80 rounded-xl p-5">
            <div className="">
              <Typography variant="h6" color="GrayText">
                This Month Statistics
              </Typography>
              <p className="text-gray-400 -mt-1 text-sm">
                Tue, 14 Nov, 2024, 11.30 AM
              </p>
              <div className="p-5 shadow-md rounded-lg mt-10">
                <div className="flex justify-between mb-3">
                  <Typography color="GrayText">Income</Typography>
                  <span className="text-gray-600 text-[12px] bg-stone-100 p-1 px-2">
                    This Month
                  </span>
                </div>
                <Divider className="w-full" />
                <Typography
                  variant="h5"
                  className="text-center pt-5 flex justify-center"
                  fontWeight={700}
                >
                  ETB 9460.00{" "}
                  <span className="text-[16px] font-thin text-red-500 flex items-center">
                    <Icon icon="mingcute:arrow-down-line" /> 1.5%
                  </span>
                </Typography>
                <Typography className="text-gray-400 text-center pt-3">
                  <span className="text-[14px]">
                    Compared to ETB9940 last month
                  </span>
                </Typography>
                <div className="pt-1">
                  <Typography className="text-gray-600 text-center flex justify-between font-semibold">
                    <span className="text-sm font-semibold">
                      Last Month Income
                    </span>{" "}
                    <span className="text-sm  font-semibold">ETB 25658.00</span>
                  </Typography>
                </div>
              </div>
            </div>
            <div className="mt-8 p-5 shadow-md rounded-lg">
              <div className="">
                <Typography className="flex justify-between">
                  <span className="font-medium text-gray-600">
                    Available Books
                  </span>
                  <span className="bg-stone-100 px-2 py-1 text-[12px]">
                    Today
                  </span>
                </Typography>
              </div>
              <BookChart />
            </div>
          </div>
          <div className="w-3/4 flex flex-col gap-5">
            <div className="bg-white rounded-xl p-5">
              <BookStatusTable />
            </div>
            <div className="bg-white rounded-xl p-5">
              <EarningSummary />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
