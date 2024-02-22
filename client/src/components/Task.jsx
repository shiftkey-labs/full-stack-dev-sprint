import "../styles/Tasks.css";

function Task({ task, handleDelete }) {
  return (
    <div className="task-card" key={task.id}>
      <div className="task-content">
        <div className="task-title">{task.title}</div>
        <div className="task-course">{task.course}</div>
        <div className="task-dueDate">Due: {task.dueDate}</div>
      </div>
      <div className="task-actions">
        <button className="task-button" onClick={() => handleDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;