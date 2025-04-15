import React from 'react';
import Calendar from '../components/Calendar';
import WeekHour from '../components/WeekHour';
import ImageUploadButton from '../components/ImageUploader';

function CalendarPage() {
  return (
    <div className="h-screen w-full bg-gray-900 text-white flex flex-col overflow-hidden p-4">
      <div className="flex justify-end mb-4">
        <ImageUploadButton buttonText="Carica immagini" />
      </div>

      <div className="flex-1 flex flex-row gap-6 overflow-hidden">
        <div className="flex-1 min-w-0 overflow-auto">
          <Calendar />
        </div>

        <div className="w-80 lg:w-96 flex-shrink-0 flex items-center">
          <div className="w-full">
            <WeekHour />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarPage;
