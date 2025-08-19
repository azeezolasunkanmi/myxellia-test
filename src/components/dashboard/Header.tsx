import React, { useState } from "react";
import { UserAvatar } from "../ui/UserAvatar";
import { Modal } from "../ui/Modal";
import Budgeting from "./Budgeting";
import { AvatarNav } from "./AvatarNav";
import CalendarComp from "./CalendarComp";

export const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  return (
    <header className="w-full bg-[#191919] border-b border-zinc-100 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="w-[154px] h-[26px]">
              <img src="/Myxellia-logo.png" alt="" className="" />
            </span>
          </div>

          {/* Navigation Actions */}
          <nav className="flex items-center gap-4">
            {/* Notification */}
            <div className="group relative">
              <button
                className="p-2 text-white rounded-lg transition-colors"
                aria-label="Notifications"
                disabled
              >
                <img
                  src="/icons/notif.svg"
                  alt="notification icon"
                  className="w-8 h-8"
                />
              </button>
              {/* <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-[#191919] text-[#919191] text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap">
                Notifications
              </div> */}
            </div>

            {/* Calculator */}
            <div className="group relative">
              <button
                className="p-2 text-white  rounded-lg transition-colors"
                aria-label="Calculator"
                onClick={() => setIsModalOpen(true)}
              >
                <img
                  src="/icons/calculator.svg"
                  alt="calculator icon"
                  className="w-8 h-8"
                />
              </button>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-[#191919] text-[#919191] text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap">
                Budgeting
              </div>
            </div>

            {/* Budgeting Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <Budgeting />
            </Modal>

            {/* Calendar */}
            <div className="group relative">
              <button
                className="p-2 text-white  rounded-lg transition-colors"
                aria-label="Calendar"
                onClick={() => setIsCalendarOpen(true)}
              >
                <img
                  src="/icons/calendar.svg"
                  alt="calendar icon"
                  className="w-8 h-8"
                />
              </button>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-[#191919] text-[#919191] text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap">
                Calendar
              </div>
            </div>

            {/* Messages */}
            <div className="group relative">
              <button
                className="p-2 text-white rounded-lg transition-colors"
                aria-label="Messages"
                disabled
              >
                <img
                  src="/icons/message-notif.svg"
                  alt="notification icon"
                  className="w-8 h-8"
                />
              </button>
              {/* <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-[#191919] text-[#919191] text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap">
                Messages
              </div> */}
            </div>

            {/* User Profile */}
            <div className="relative group">
              <button
                className="ml-2"
                onClick={() =>
                  setIsAvatarModalOpen(isAvatarModalOpen => !isAvatarModalOpen)
                }
                aria-label="Open user menu"
              >
                <UserAvatar initial="D" />
              </button>
              <div className="absolute right-0 top-11 hidden group-hover:block bg-white  py-2 px-5 rounded shadow-lg whitespace-nowrap z-20">
                <h3 className="text-[15px] font-bold text-gray-900">
                  Dylan Frank
                </h3>
                <p className="text-sm text-gray-500">dylanfran96@mail.com</p>
              </div>
              {isAvatarModalOpen && (
                <div className="absolute top-16 right-0 z-50">
                  <AvatarNav />
                </div>
              )}
            </div>
          </nav>
        </div>
        {/* Calendar Modal */}
        {isCalendarOpen && (
          <div className="absolute bg-black top-16 right-0 z-50">
            <CalendarComp onClose={() => setIsCalendarOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
};
