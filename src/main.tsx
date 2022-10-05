import React from "react";
import ReactDOM from "react-dom/client";
import Media from "./components/templates/media";
import "./index.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <Media />
  </React.StrictMode>
);
