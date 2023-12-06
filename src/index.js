import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const element = <App/>;

const root = createRoot(document.getElementById("root"));

root.render(element);