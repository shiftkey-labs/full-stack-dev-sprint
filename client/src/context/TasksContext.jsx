import React, { createContext, useContext, useState } from "react";

const TasksContext = createContext();

export const useTasks = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete Lab 6",
      course: "CSCI 2110",
      dueDate: "20 November",
    },
    {
      id: 2,
      title: "Peer Review Assignment",
      course: "ASSC 1800",
      dueDate: "21 November",
    },
  ]);

  const handleAdd = ({ title, course }) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      course,
      dueDate: "Not Set",
    };
    setTasks([...tasks, newTask]);
  };

  const handleDelete = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  return (
    <TasksContext.Provider value={{ tasks, handleAdd, handleDelete }}>
      {children}
    </TasksContext.Provider>
  );
};
