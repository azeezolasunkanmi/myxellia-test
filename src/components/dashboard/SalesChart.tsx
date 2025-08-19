import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface ChartMetric {
  label: string;
  value: string;
  color: string;
  change: string;
  changeType: "up" | "down";
}

export const SalesChart: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("1 Year");

  const periods = ["1 Week", "1 Month", "1 Year"];

  const metrics: ChartMetric[] = [
    {
      label: "Total Inflow",
      value: "₦120,000,000.00",
      color: "#4545FE",
      change: "2.5%",
      changeType: "up",
    },
    {
      label: "MRR",
      value: "₦50,000,000.00",
      color: "#12B76A",
      change: "2.5%",
      changeType: "up",
    },
    {
      label: "Commission Revenue",
      value: "₦200,000,000.00",
      color: "#14B8A6",
      change: "0.5%",
      changeType: "down",
    },
    {
      label: "GMV",
      value: "₦100,000,000.00",
      color: "#F04438",
      change: "0.5%",
      changeType: "down",
    },
  ];

  const chartData = [
    { month: "Jan", totalInflow: 45, mrr: 35, commission: 15, gmv: 25 },
    { month: "Feb", totalInflow: 40, mrr: 30, commission: 20, gmv: 30 },
    { month: "Mar", totalInflow: 50, mrr: 40, commission: 25, gmv: 35 },
    { month: "Apr", totalInflow: 35, mrr: 25, commission: 18, gmv: 20 },
    { month: "May", totalInflow: 55, mrr: 45, commission: 30, gmv: 40 },
    { month: "Jun", totalInflow: 48, mrr: 38, commission: 22, gmv: 32 },
    { month: "Jul", totalInflow: 42, mrr: 32, commission: 28, gmv: 28 },
    { month: "Aug", totalInflow: 38, mrr: 28, commission: 24, gmv: 26 },
    { month: "Sep", totalInflow: 45, mrr: 35, commission: 26, gmv: 10 },
  ];

  return (
    <section className="w-full relative box-border">
      <div className="border bg-white rounded-2xl border-[#E4E4E4] p-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-[#191919] text-xl font-semibold">
              Sales Overview
            </h2>
            <p className="text-[#606060] text-xs font-normal mt-1">
              Showing overview Jan 2022 - Sep 2022
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* View Transactions Button */}
            <button className="px-6 py-3 border border-[#D6D6D6] rounded-[72px] hover:bg-gray-50 transition-colors">
              <div className="text-[#191919] text-xs font-medium">
                View Transactions
              </div>
            </button>

            {/* Period Selector */}
            <div className="inline-flex items-center gap-2">
              {periods.map(period => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-2 rounded-lg transition-colors text-sm ${
                    selectedPeriod === period
                      ? "bg-neutral-100 text-[#3D3D3D] font-semibold"
                      : "bg-white text-[#3D3D3D] font-normal hover:bg-gray-50"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chart Container */}
        <div className="flex gap-2">
          {/* Chart */}
          <div className="w-[50%] h-46 relative">
            {/* Left Arrow */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hover:opacity-80 transition-opacity"
              disabled
            >
              <img src="/arrow-left.svg" alt="Previous" className="w-4 h-4" />
            </button>

            {/* Right Arrow */}
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hover:opacity-80 transition-opacity"
              disabled
            >
              <img src="/arrow-right.svg" alt="Next" className="w-4 h-4" />
            </button>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
              >
                {/* <CartesianGrid strokeDasharray="3 3" stroke="#E4E4E4" /> */}
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 10, fill: "#919191" }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: "#919191" }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={value => `${value}m`}
                />
                <Bar dataKey="totalInflow" fill="#4545FE" />
                <Bar dataKey="mrr" fill="#12B76A" />
                {/* <Bar dataKey="commission" fill="#14B8A6" /> */}
                <Bar dataKey="gmv" fill="#F04438" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Metrics Cards */}
          <div className="w-[50%]">
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="border bg-white rounded-xl border-[#E4E4E4] py-3 px-2"
                >
                  <div className="flex flex-col gap-2">
                    <div
                      className="text-lg font-semibold"
                      style={{ color: metric.color }}
                    >
                      {metric.value}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-[#3D3D3D] text-xs font-medium">
                        {metric.label}
                      </div>
                      <div className="flex items-center gap-1">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d={
                              metric.changeType === "up"
                                ? "M6.99935 1.16797C10.2193 1.16797 12.8327 3.7813 12.8327 7.0013C12.8327 10.2213 10.2193 12.8346 6.99935 12.8346C3.77935 12.8346 1.16602 10.2213 1.16602 7.0013C1.16602 3.7813 3.77935 1.16797 6.99935 1.16797ZM7.58268 7.0013H9.33268L6.99935 4.66797L4.66602 7.0013H6.41602V9.33463H7.58268V7.0013Z"
                                : "M7.00065 12.832C3.78065 12.832 1.16732 10.2187 1.16732 6.9987C1.16732 3.7787 3.78065 1.16537 7.00065 1.16537C10.2207 1.16537 12.834 3.7787 12.834 6.9987C12.834 10.2187 10.2207 12.832 7.00065 12.832ZM6.41732 6.9987H4.66732L7.00065 9.33203L9.33398 6.9987L7.58398 6.9987V4.66537H6.41732V6.9987Z"
                            }
                            fill={
                              metric.changeType === "up"
                                ? "#12B76A"
                                : metric.color
                            }
                          ></path>
                        </svg>
                        <div
                          className={`text-xs font-normal ${
                            metric.changeType === "up" ? "text-[#12B76A]" : ""
                          }`}
                          style={{
                            color:
                              metric.changeType === "down"
                                ? metric.color
                                : undefined,
                          }}
                        >
                          {metric.change}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
