import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

//React Router
import { BrowserRouter, Route, Routes } from "react-router";

//Other Pages (links)
import Dashboard from "./dashboard/page.tsx";
import Login from "./login/page.tsx";
import Signup from "./signup/page.tsx";
import Start from "./start/page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/start" element={<Start />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
