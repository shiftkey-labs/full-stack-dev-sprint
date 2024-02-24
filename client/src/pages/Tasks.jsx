import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/Tasks.css";
import { useTasks } from "../context/TasksContext";
import Task from "../components/Task";

const Tasks = () => {
  const { tasks, handleDelete } = useTasks();

  return (
    <>
      <Header />
      {tasks.length > 0 ? (
        <div className="tasks-grid">
          {tasks.map((task) => (
            <Task task={task} key={task.id} handleDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </>
  );
};

export default Tasks;
