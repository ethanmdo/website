import React from "react";
import NavBar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
