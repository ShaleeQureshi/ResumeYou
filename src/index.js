import React from "react";
import "./scripts/firebase/config.ts";
import ReactDOM from "react-dom/client";
import App from "./scripts/App.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
