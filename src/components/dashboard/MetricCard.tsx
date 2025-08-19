import React from "react";

interface MetricCardProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  className?: string;
  onClick?: () => void;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  subtitle,
  backgroundImage,
  className = "",
  onClick,
}) => {
  return (
    <div
      className={`flex-1 min-w-0 h-[286px] relative box-border rounded-xl cursor-pointer hover:opacity-90 transition-opacity ${className}`}
      onClick={onClick}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="w-full h-full absolute left-0 top-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full absolute left-0 top-0 object-cover rounded-xl"
          />
          <div className="w-full h-full absolute left-0 top-0 bg-black bg-opacity-40 rounded-xl" />
        </div>
      )}

      {/* Overlay for cards without background image */}
      {!backgroundImage && (
        <div className="w-full h-full absolute rounded-xl left-0 top-0 bg-gradient-to-br from-gray-800 to-gray-900" />
      )}

      {/* Progress Dots */}
      <div className="absolute left-[202px] top-[270px] w-[60px] h-[7px]">
        <svg
          width="60"
          height="8"
          viewBox="0 0 60 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="3.49737"
            cy="4.06084"
            r="2.76066"
            fill="white"
            stroke="#E5E5E5"
            strokeWidth="1.10427"
          ></circle>
          <circle
            cx="16.7483"
            cy="4.06084"
            r="3.3128"
            fill="white"
            fillOpacity="0.2"
          ></circle>
          <circle
            cx="29.9993"
            cy="4.06084"
            r="3.3128"
            fill="white"
            fillOpacity="0.2"
          ></circle>
          <circle
            cx="43.2513"
            cy="4.06084"
            r="3.3128"
            fill="white"
            fillOpacity="0.2"
          ></circle>
          <circle
            cx="56.5023"
            cy="4.06084"
            r="3.3128"
            fill="white"
            fillOpacity="0.2"
          ></circle>
        </svg>
      </div>

      {/* Text Content */}
      <div className="inline-flex flex-col justify-center items-start absolute w-full h-[41px] box-border left-4 top-[220px]">
        <div className="self-stretch text-white text-sm font-medium uppercase">
          {title}
        </div>
        <div className="self-stretch text-white text-lg font-semibold">
          {subtitle}
        </div>
      </div>
    </div>
  );
};
