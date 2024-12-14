import React from 'react';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Location from './components/Location';
import SocialLinks from './components/SocialLinks';
import FormSection from './components/FormSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Experience />
      <Education />
      <Location />
      <SocialLinks />
      <FormSection />
    </div>
  );
}

export default App;
