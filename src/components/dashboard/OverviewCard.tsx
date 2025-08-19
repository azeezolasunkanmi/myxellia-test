import React from "react";

interface OverviewCardProps {
  title: string;
  icon: React.ReactNode;
  metrics: {
    label: string;
    value: string;
  }[];
  onViewAll?: () => void;
}

export const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  icon,
  metrics,
  onViewAll,
}) => {
  return (
    <div className="h-[152px] w-full max-sm:h-[120px] bg-white rounded-2xl border border-solid border-[#E4E4E4] overflow-hidden flex flex-col">
      {/* Header */}
      <div className="h-[50px] bg-gray-50 border-b-[0.5px] border-b-[#E4E4E4] border-solid flex items-center justify-between px-4 py-[13px] shrink-0">
        {/* Title with Icon */}
        <div className="flex items-center gap-2.5">
          <div>{icon}</div>
          <div className="text-[#292929] text-sm font-medium">{title}</div>
        </div>

        {/* View All Button */}
        <button
          onClick={onViewAll}
          className="flex items-center gap-0.5 hover:opacity-80 transition-opacity"
        >
          <div className="text-[#4545FE] text-xs font-medium">View all</div>
          <div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.87852 8.99956L6.16602 5.28706L7.22652 4.22656L11.9995 8.99956L7.22652 13.7726L6.16602 12.7121L9.87852 8.99956Z"
                fill="#4545FE"
              ></path>
            </svg>
          </div>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-5 max-sm:py-3">
        <div className="flex justify-between items-end h-full">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col justify-end gap-2 min-w-0 flex-1"
            >
              <div className="text-neutral-600 text-sm font-medium leading-5 max-sm:text-xs">
                {metric.label}
              </div>
              <div className="text-[#141414] text-2xl font-semibold leading-[38px] max-sm:text-lg max-sm:leading-6">
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
