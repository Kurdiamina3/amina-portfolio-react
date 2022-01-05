import React from 'react';

import { Link } from "react-scroll";

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';

function App() {
  return (
    <div className ="App">
      <div className ="wrapper">
      <Navigation />
      <Header />
      <Project />
      <About />
      <Contact />
      <Footer />
      
      </div>
    </div>
  );
}

export default App;
