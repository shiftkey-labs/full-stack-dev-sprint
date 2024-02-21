import React, { useState } from "react";
import { useTasks } from "../context/TasksContext";
import "../styles/Form.css";
import Header from "../components/Header";

const Form = () => {
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const { handleAdd } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please add a task");
      return;
    }
    handleAdd({ title, course });
    setTitle("");
    setCourse("");
  };

  return (
    <>
      <Header />
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Add Task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course</label>{" "}
          <input
            type="text"
            id="course"
            className="form-control"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Task
        </button>{" "}
      </form>
    </>
  );
};

export default Form;
