import React from "react";

import Navbar from "./routes/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <section id="whole-page">
      <Navbar />
    </section>
  );
};

export default App;
