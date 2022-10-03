import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MediaComponent from "./components/MediaComponent";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <MediaComponent />
  </React.StrictMode>
);
