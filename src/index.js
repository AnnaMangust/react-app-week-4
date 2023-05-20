import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';

import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="Weather">
      <h1>Weather App</h1>
      <h2>
        <Weather />
      </h2>
      <div className="link-block">Open-sourse code by Hanna Tsubulska available at <a href="/" className="link">GitHub</a></div>
    </div>
  </StrictMode>
);
