import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  onSearch,
  className = "",
}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="max-w-[319px] xl:w-[319px] h-[43px] shrink-0 border box-border bg-neutral-100 rounded-xl border-solid border-[#E4E4E4] px-4 py-2">
        <div className="flex max-w-[291px] xl:w-[291px] items-center gap-2 h-6 box-border">
          {/* logo */}
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="search-icon"
              style={{
                boxSizing: "border-box",
                width: "24px",
                height: "24px",
                flexShrink: 0,
              }}
            >
              <path
                d="M11.7669 20.7545C16.7311 20.7545 20.7554 16.7301 20.7554 11.7659C20.7554 6.80166 16.7311 2.77734 11.7669 2.77734C6.80264 2.77734 2.77832 6.80166 2.77832 11.7659C2.77832 16.7301 6.80264 20.7545 11.7669 20.7545Z"
                stroke="#3D3D3D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M18.0186 18.4844L21.5426 21.9993"
                stroke="#3D3D3D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={placeholder}
            className="text-[#919191] text-xs font-light bg-transparent border-none outline-none flex-1"
          />
        </div>
      </div>
    </form>
  );
};
