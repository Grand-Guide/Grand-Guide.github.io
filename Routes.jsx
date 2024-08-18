// src/Routes.jsx
import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home"; // Supondo que o caminho está correto
import NotFound from "./pages/NotFound"; // Supondo que o caminho está correto
import GrandGuide from "./pages/GrandGuide"; // Verifique o caminho

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "grandguide",
      element: <GrandGuide />,
    },
  ]);
  return element;
};

export default ProjectRoutes;
