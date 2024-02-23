import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import { TasksProvider } from "./context/TasksContext";
import Form from "./pages/Form";
import { AuthProvider } from "./context/AuthContext";
import AuthForm from "./pages/AuthForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/add-task",
    element: <Form />,
  },
  {
    path: "/auth",
    element: <AuthForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <TasksProvider>
        <RouterProvider router={router} />
      </TasksProvider>
    </AuthProvider>
  </React.StrictMode>
);
