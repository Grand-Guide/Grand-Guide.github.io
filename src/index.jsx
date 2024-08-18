import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import "./styles/font.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./themes"; // Importa o tema

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ChakraProvider theme={theme}> {/* Envolve a aplicação com o ChaProvider */}
    <App />
  </ChakraProvider>
);
