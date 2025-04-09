import React from 'react';
import Calendar from '../components/Calendar';

const CalendarPage: React.FC = () => {
  return (
    <div className="h-screen bg-gray-50">
      <div className="container mx-auto">
        <Calendar />
      </div>
    </div>
  );
};

export default CalendarPage;
