import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default react-calendar styling
import './Home.css'; // Your custom styling
import { useTasks } from "../context/TasksContext";
import Header from "../components/Header";

const Home = () => {
  const { tasks } = useTasks();
  const [value, setValue] = useState(new Date());

  // Enhanced function to find tasks for a specific date
  const findTasksForDate = (date) => {
    return tasks.filter(task => {
      // Convert task.date from ISO string to Date object
      const taskDate = new Date(task.date);
      return taskDate.getDate() === date.getDate() &&
             taskDate.getMonth() === date.getMonth() &&
             taskDate.getFullYear() === date.getFullYear();
    });
  };

  // Updated custom tile content to display tasks
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const tasksForDay = findTasksForDate(date);
      return (
        <ul className="calendar-tasks-list">
          {tasksForDay.map(task => (
            <li key={task.id} className="calendar-task-item">
              {task.title} {/* Display task title, can add more details */}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <>
      <Header />
      <div className="calendar-container">
        <Calendar
          onChange={setValue}
          value={value}
          tileContent={tileContent} // Display tasks on calendar
        />
      </div>
    </>
  );
};

export default Home;
