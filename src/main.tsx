import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './pages/hack110';
import About from './pages/about';
import Map from './pages/map';
import Workshops from "./pages/workshops";

console.log('App starting...', window.location.href);

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element not found");
  }
  
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/map" element={<Map />} />
          <Route path="/workshops" element={<Workshops />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
  console.log('App rendered successfully');
} catch (error) {
  console.error('Failed to render app:', error);
  const errorMessage = error instanceof Error ? error.message : String(error);
  document.body.innerHTML = '<div style="padding: 20px; color: red; font-family: monospace;">Error loading app: ' + errorMessage + '</div>';
}
