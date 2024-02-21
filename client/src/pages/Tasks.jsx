import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/Tasks.css";
import { useTasks } from "../context/TasksContext";

const Tasks = () => {
  const { tasks, handleDelete } = useTasks();

  return (
    <>
      <Header />
      {tasks.length > 0 ? (
        <div className="tasks-grid">
          {tasks.map((task) => (
            <div className="task-card" key={task.id}>
              <div className="task-content">
                <div className="task-title">{task.title}</div>
                <div className="task-course">{task.course}</div>
                <div className="task-dueDate">Due: {task.dueDate}</div>
              </div>
              <div className="task-actions">
                <button
                  className="task-button"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </>
  );
};

export default Tasks;
