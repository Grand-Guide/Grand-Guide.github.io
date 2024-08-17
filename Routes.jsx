import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import GrandGuide from "pages/GrandGuide";

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