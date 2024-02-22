import React, { createContext, useContext, useState } from 'react';

const TasksContext = createContext();

export const useTasks = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const handleAdd = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <TasksContext.Provider value={{ tasks, handleAdd, handleDelete }}>
      {children}
    </TasksContext.Provider>
  );
};
