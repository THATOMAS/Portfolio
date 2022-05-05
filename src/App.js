import React from "react";

import Home from "./routes/Home";
import About from "./routes/About";
import Skills from "./routes/Skills";
import Portfolio from "./routes/Portfolio";
import Contact from "./routes/Contact";

const App = () => {
  return (
    <section>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </section>
  );
};

export default App;
