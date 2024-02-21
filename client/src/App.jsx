import { useState } from "react";
import reactLogo from "/assets/react.svg";
import shiftkeyLogo from "/sk-icon.png";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://shiftkeylabs.ca/" target="_blank">
          <img src={shiftkeyLogo} className="logo" alt="Shiftkey logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Full Stack Dev Sprint</h1>
      {/* This is how you use Material UI */}
      <Button
        variant="contained"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </Button>
      <footer>
        <p className="read-the-docs">Created by Vansh Sood</p>
      </footer>
    </>
  );
}

export default App;
