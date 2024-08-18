import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import "./styles/font.css";
import theme from "./themes";  // Importa o tema consolidado

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
