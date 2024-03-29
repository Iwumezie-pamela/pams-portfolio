import { useState } from 'react';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Projects from './components/Project';
import Contact from './components/Contact';
import Socials from './components/Socials';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Socials />
    </>
  );
}

export default App;
