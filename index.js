import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./globalStyle"; 
import Apop from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GlobalStyle/>
    <Apop />
  </StrictMode>
);
