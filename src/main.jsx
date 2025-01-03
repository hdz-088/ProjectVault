import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Links from "../components/Links.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Links /> */}
  </StrictMode>
);
