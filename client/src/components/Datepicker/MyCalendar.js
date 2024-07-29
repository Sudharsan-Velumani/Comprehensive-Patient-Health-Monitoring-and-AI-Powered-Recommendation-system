import React from 'react'; // Add this line
import Calendar from 'react-calendar';
import './Calendar.css';
import 'react-calendar/dist/Calendar.css';

function CustomCalendar({ date, setDate }) {
  return (
    <div className='calendar-container'>
      <Calendar
        onChange={setDate}
        value={date}
      />
    </div>
  );
}

export default CustomCalendar;
