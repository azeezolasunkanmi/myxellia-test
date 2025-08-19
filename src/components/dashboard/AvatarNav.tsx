export const AvatarNav = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg py-2 w-[320px] mx-auto z-50">
      {/* User Info */}
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <span className="py-2 px-4 rounded-full bg-green-700">
            <h2 className="text-white font-semibold text-2xl">D</h2>
          </span>
          <div>
            <h3 className="text-[15px] font-bold text-gray-900">Dylan Frank</h3>
            <p className="text-sm text-gray-500">dylan96@mail.com</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="py-2 font-semibold">
        <a
          href="#teams"
          className="flex items-center px-4 py-4 text-md text-gray-700 hover:bg-gray-100"
        >
          <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none">
            <path
              d="M9.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 01-4.27-4.43C4.56 3.99 6.54 2 9 2a4.435 4.435 0 01.16 8.87zM16.41 4c1.94 0 3.5 1.57 3.5 3.5 0 1.89-1.5 3.43-3.37 3.5a1.13 1.13 0 00-.26 0"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.34 20c.72-.15 1.4-.44 1.96-.87 1.56-1.17 1.56-3.1 0-4.27-.55-.42-1.22-.7-1.93-.86"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Teams
        </a>

        <a
          href="#contacts"
          className="flex items-center px-4 py-4 text-md text-gray-700 hover:bg-gray-100"
        >
          <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none">
            <path
              d="M9.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 01-4.27-4.43C4.56 3.99 6.54 2 9 2a4.435 4.435 0 01.16 8.87z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.41 4c1.94 0 3.5 1.57 3.5 3.5 0 1.89-1.5 3.43-3.37 3.5a1.13 1.13 0 00-.26 0M4.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0zM18.34 20c.72-.15 1.4-.44 1.96-.87 1.56-1.17 1.56-3.1 0-4.27-.55-.42-1.22-.7-1.93-.86"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Contact Persons
        </a>

        <a
          href="#password"
          className="flex items-center px-4 py-4 text-md text-gray-700 hover:bg-gray-100"
        >
          <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 10V8c0-3.31 1-6 6-6s6 2.69 6 6v2M12 18.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 22H7c-4 0-5-1-5-5v-2c0-4 1-5 5-5h10c4 0 5 1 5 5v2c0 4-1 5-5 5z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Change password
        </a>

        <a
          href="#2fa"
          className="flex items-center px-4 py-4 text-md text-gray-700 hover:bg-gray-100"
        >
          <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none">
            <path
              d="M20.91 11.12c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.02 0-4.85-1.34-8.4-5.92-8.4-10.81V6.73c0-.82.62-1.75 1.39-2.06l5.57-2.28c1.25-.51 2.66-.51 3.91 0l5.57 2.28c.76.31 1.39 1.24 1.39 2.06l-.01 4.39z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM12 12.5V15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          2 - Factor Authentication
        </a>

        <div className="border-t border-gray-100 my-2"></div>

        <button
          onClick={() => console.log("Logout clicked")}
          className="flex items-center w-full px-4 py-4 text-md text-red-600 hover:bg-gray-100"
        >
          <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none">
            <path
              d="M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M15 12H3.62M5.85 8.65L2.5 12l3.35 3.35"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Logout
        </button>
      </nav>
    </div>
  );
};
