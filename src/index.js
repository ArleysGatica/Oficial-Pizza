import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { UserContextProvider } from "./app/context/UserContext";
import IndexRoutes from "./app/routes/index.routes";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <IndexRoutes />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

