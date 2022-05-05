import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./routes/About";
import Skills from "./routes/Skills";
import Portfolio from "./routes/Portfolio";
import Contact from "./routes/Contact";

const root = document.getElementById("root");

render(
  <main>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  </main>,
  root
);
