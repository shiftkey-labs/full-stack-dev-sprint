import React, { useState } from "react";
import { useTasks } from "../context/TasksContext";
import "../styles/Form.css";
import Header from "../components/Header";

const Form = () => {
  const [formState, setFormState] = useState({
    title: "",
    course: "",
    date: "" // This will be adjusted to ensure correct timezone handling
  });

  const { handleAdd } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!formState.title || !formState.date) {
      console.error("Please add both a title and a date for the task.");
      return;
    }
  
    // Adjust the date to account for timezone, setting it to noon
    const localDate = new Date(formState.date + 'T12:00:00');
  
    handleAdd({ ...formState, date: localDate.toISOString().split('T')[0] });
    setFormState({ title: "", course: "", date: "" });
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <Header />
      <form className="form" onSubmit={handleSubmit}>
        {/* Form fields remain unchanged */}
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" className="form-control" placeholder="Add Task" value={formState.title} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course</label>
          <input type="text" id="course" name="course" className="form-control" placeholder="Course" value={formState.course} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" className="form-control" value={formState.date} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Save Task</button>
      </form>
    </>
  );
};

export default Form;
