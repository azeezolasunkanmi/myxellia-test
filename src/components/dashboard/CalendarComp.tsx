import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import "./calendar.css";

// Define the Value type from react-calendar
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface CalendarCompProps {
  onClose?: () => void;
}

const CalendarComp: React.FC<CalendarCompProps> = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // Handle the onChange event properly
  const handleDateChange = (value: Value) => {
    // Only handle single date selection (not ranges)
    if (value instanceof Date) {
      setSelectedDate(value);
    } else if (Array.isArray(value) && value[0] instanceof Date) {
      // If it's a range, take the first date
      setSelectedDate(value[0]);
    }
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const today = new Date();
      if (date.toDateString() === today.toDateString()) {
        return "react-calendar__tile--today";
      }
      if (date.getMonth() !== today.getMonth()) {
        return "react-calendar__tile--neighbor";
      }
    }
    return null;
  };

  const formatShortWeekday = (locale: string, date: Date) => {
    const weekdays = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];
    return weekdays[date.getDay()];
  };

  return (
    <div className="bg-black bg-opacity-50 flex items-center justify-center">
      <div className="rounded-lg w-[450px]">
        <div className="flex items-center justify-between bg-[#171717] p-4">
          <button
            className="text-white hover:text-gray-300 flex items-center gap-2"
            onClick={onClose}
          >
            <ArrowLeft size={20} />{" "}
            <h2 className="text-white text-lg font-medium">Calendar</h2>
          </button>

          <button className="text-white hover:text-gray-300" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="p-4">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            tileClassName={tileClassName}
            formatShortWeekday={formatShortWeekday}
            selectRange={false}
            prevLabel={<ChevronLeft className="text-white" size={20} />}
            nextLabel={<ChevronRight className="text-white" size={20} />}
            className="dark-calendar"
            showNeighboringMonth={true}
            showFixedNumberOfWeeks={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarComp;
