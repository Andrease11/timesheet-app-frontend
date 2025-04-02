import React, { useState } from 'react';

interface CalendarDayProps {
  date: Date | null;
  isToday: boolean;
  isSelected: boolean;
  onSelect: (date: Date) => void;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ date, isToday, isSelected, onSelect }) => {
  return (
    <div
      className={`aspect-square flex items-center justify-center rounded-md transition-colors duration-200 text-sm md:text-base
        ${!date ? 'text-gray-300' : 'cursor-pointer'}
        ${isToday ? 'bg-blue-100 text-blue-600 font-bold' : ''}
        ${isSelected ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}
      `}
      onClick={() => date && onSelect(date)}
    >
      {date ? date.getDate() : ''}
    </div>
  );
};

const CalendarPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getMonthData = (year: number, month: number): (Date | null)[] => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startOffset = firstDay.getDay();

    const days: (Date | null)[] = [];

    // Add empty slots for days before the first day of the month
    for (let i = 0; i < startOffset; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const isToday = (date: Date | null): boolean => {
    if (!date) return false;
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  const isSelected = (date: Date | null): boolean => {
    if (!selectedDate || !date) return false;
    return date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear();
  };

  const nextMonth = (): void => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = (): void => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToToday = (): void => {
    setCurrentDate(new Date());
  };

  const handleDateSelect = (date: Date): void => {
    setSelectedDate(date);
  };

  const days = getMonthData(currentDate.getFullYear(), currentDate.getMonth());

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">Calendar</h1>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Calendar Header */}
        <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={prevMonth}
              className="p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
              aria-label="Previous month"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToToday}
              className="px-3 py-1 text-sm bg-blue-700 rounded-md hover:bg-blue-800 transition-colors duration-200"
            >
              Today
            </button>
            <button
              onClick={nextMonth}
              className="p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
              aria-label="Next month"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="p-2 md:p-4">
          {/* Days Header */}
          <div className="grid grid-cols-7 gap-1 mb-2 text-sm md:text-base font-medium text-gray-700">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="text-center py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 md:gap-2">
            {days.map((date, index) => (
              <CalendarDay
                key={index}
                date={date}
                isToday={isToday(date)}
                isSelected={isSelected(date)}
                onSelect={handleDateSelect}
              />
            ))}
          </div>
        </div>

        {/* Selected Date Info */}
        {selectedDate && (
          <div className="p-4 border-t border-gray-200">
            <p className="text-lg text-gray-700">
              Selected: <span className="font-medium">
                {selectedDate.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;
