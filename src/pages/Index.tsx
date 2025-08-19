import React from "react";
import { Header } from "@/components/dashboard/Header";
import { NavigationTabs } from "@/components/dashboard/NavigationTabs";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { OverviewCard } from "@/components/dashboard/OverviewCard";
import { MetricCard } from "@/components/dashboard/MetricCard";
import Footer from "@/components/dashboard/Footer";

const Index = () => {
  const handleViewAllListings = () => {
    console.log("View all listings clicked");
  };

  const handleViewAllUsers = () => {
    console.log("View all users clicked");
  };

  const handleMetricCardClick = (type: string) => {
    console.log(`${type} metric card clicked`);
  };

  const listingsMetrics = [
    { label: "Total", value: "1.8k" },
    { label: "Active", value: "80" },
    { label: "Archived", value: "1k" },
  ];

  const usersMetrics = [
    { label: "Total", value: "20.7k" },
    { label: "Riders", value: "8.5k" },
    { label: "Subscribers", value: "7.5k" },
  ];

  return (
    <div className="min-h-screen box-border bg-[#FBFCFC] relative font-euclid">
      <Header />
      {/* Navigation Tabs */}
      <NavigationTabs />

      {/* Welcome Message */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <h1 className="text-[#191919] text-xl font-semibold font-euclid">
          Welcome, Ahmed
        </h1>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-start gap-5 max-md:flex-col ">
          {/* Sales Chart */}
          <div className="w-[69%]">
            <SalesChart />
          </div>

          {/* Overview Cards */}
          <div className="flex w-[30%] flex-col items-start gap-5 box-border">
            <OverviewCard
              title="Listings Overview"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 22H2M2 11L10.126 4.5C10.6579 4.07449 11.3188 3.84267 12 3.84267C12.6812 3.84267 13.3421 4.07449 13.874 4.5L22 11M15.5 5.5V3.5C15.5 3.36739 15.5527 3.24021 15.6464 3.14645C15.7402 3.05268 15.8674 3 16 3H18.5C18.6326 3 18.7598 3.05268 18.8536 3.14645C18.9473 3.24021 19 3.36739 19 3.5V8.5M4 22V9.5M20 22V9.5"
                    stroke="#4545FE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M15 22V17C15 15.586 15 14.879 14.56 14.44C14.122 14 13.415 14 12 14C10.585 14 9.879 14 9.44 14.44C9 14.878 9 15.585 9 17V22M14 9.5C14 10.0304 13.7893 10.5391 13.4142 10.9142C13.0391 11.2893 12.5304 11.5 12 11.5C11.4696 11.5 10.9609 11.2893 10.5858 10.9142C10.2107 10.5391 10 10.0304 10 9.5C10 8.96957 10.2107 8.46086 10.5858 8.08579C10.9609 7.71071 11.4696 7.5 12 7.5C12.5304 7.5 13.0391 7.71071 13.4142 8.08579C13.7893 8.46086 14 8.96957 14 9.5Z"
                    stroke="#4545FE"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              }
              metrics={listingsMetrics}
              onViewAll={handleViewAllListings}
            />

            <OverviewCard
              title="Users Overview"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1596 10.87C12.0596 10.86 11.9396 10.86 11.8296 10.87C9.44957 10.79 7.55957 8.84 7.55957 6.44C7.55957 3.99 9.53957 2 11.9996 2C14.4496 2 16.4396 3.99 16.4396 6.44C16.4296 8.84 14.5396 10.79 12.1596 10.87Z"
                    stroke="#4545FE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M7.15973 14.56C4.73973 16.18 4.73973 18.82 7.15973 20.43C9.90973 22.27 14.4197 22.27 17.1697 20.43C19.5897 18.81 19.5897 16.17 17.1697 14.56C14.4297 12.73 9.91973 12.73 7.15973 14.56Z"
                    stroke="#4545FE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              }
              metrics={usersMetrics}
              onViewAll={handleViewAllUsers}
            />
          </div>
        </div>

        {/* Metric Cards Row */}
        <section className="flex justify-between items-start gap-5 mt-8 max-md:flex-col max-md:gap-5">
          <MetricCard
            title="Most CLICKED"
            subtitle="Urban Prime Plaza Premiere"
            backgroundImage="/images/img1.jpg"
            onClick={() => handleMetricCardClick("most-clicked")}
          />

          <MetricCard
            title="most wATCHLISTED"
            subtitle="Urban Prime Plaza Premiere"
            backgroundImage="/images/img2.jpg"
            onClick={() => handleMetricCardClick("most-watchlisted")}
          />

          <MetricCard
            title="HOTTEST LISTING"
            subtitle="Urban Prime Plaza Premiere"
            backgroundImage="/images/img3.jpg"
            onClick={() => handleMetricCardClick("hottest-listing")}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
