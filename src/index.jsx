import "../global.css";
import "../styleguide.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { DesktopLandingPage } from "./screens/DesktopLandingPage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<DesktopLandingPage />);
