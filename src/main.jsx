import React from "react";
import ReactDOM from "react-dom/client";
import Blog from "./Blog";
import Contact from "./Contact";
import Home from "./Home";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container mt-5">
      < Home />
      <Contact />
      <Blog />
    </div>
  </React.StrictMode>
);
