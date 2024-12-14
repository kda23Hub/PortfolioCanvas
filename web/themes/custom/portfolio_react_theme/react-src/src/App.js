import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Technologies from './components/Technologies';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <Projects />
      <div className="education-experience-section">
        <Education />
        <Experience />
      </div>
      <Technologies />
      <Contact />
    </div>
  );
};

export default App;
