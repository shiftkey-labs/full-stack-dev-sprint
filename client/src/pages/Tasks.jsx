import React from "react";
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
            <div key={task.id} className="task-item">
              <Task task={task} handleDelete={() => handleDelete(task.id)} />
              <div>Date: {task.date}</div> {/* Display the date of the task */}
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