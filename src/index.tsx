import React from "react";
import "./scripts/firebase/config.ts";
import ReactDOM from "react-dom/client";
import App from "./scripts/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
