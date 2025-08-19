import React from "react";

const Footer = () => {
  return (
    <div>
      <button
        className="absolute right-16 top-3/4 -translate-y-1/2 z-10 hover:opacity-80 transition-opacity bg-[#242526] p-4 rounded-full"
        disabled
      >
        <img src="/messages-3.svg" alt="Previous" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Footer;
