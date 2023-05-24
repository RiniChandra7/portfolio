import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Links from "./components/Links";

export default function App() {
  return (
    <main className="bg-indigo-700 text-gray-200 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Links />
      <Contact />
    </main>
  );
}
