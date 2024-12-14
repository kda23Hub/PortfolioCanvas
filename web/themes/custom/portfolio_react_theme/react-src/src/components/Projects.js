import React from 'react';

const Projects = () => {
  return (
    <section className="section projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-item">
        <h3>Pseudocode to C</h3>
        <p>Pseudocode to C is a web app that translates pseudocode into C code, aiding in the transition from high-level logic to a lower-level language.</p>
        <a href="https://pseudocode-to-c.netlify.app/">View Project</a>
        <a href="https://github.com/dsbalico/pseudocode-to-c">View Github</a>
      </div>
      <div className="project-item">
        <h3>YouShare</h3>
        <p>Developed to learn full-stack web development using Nuxt3, Express, and PostgreSQL in fulfillment of my internship requirements.</p>
        <a href="https://github.com/dsbalico/YouShare">View Project</a>
        <a href="https://github.com/dsbalico/YouShare">View Github</a>
      </div>
      <div className="project-item">
        <h3>Draw & Classify</h3>
        <p>Draw & Classify is a web application designed to test my machine learning model, which classifies drawn letters, digits, or shapes.</p>
        <a href="https://letterdigitshape-classification.netlify.app/">View Project</a>
        <a href="https://github.com/dsbalico/letter-digit-shape-classification">View Github</a>
      </div>
      <div className="project-item">
        <h3>Chatroom</h3>
        <p>Chatroom is a simple online chatting web application where you can create chat rooms and have a fun conversation with a group of people.</p>
        <a href="https://thechatroom.netlify.app/">View Project</a>
        <a href="https://github.com/dsbalico/chatroom">View Github</a>
      </div>
      <div className="project-item">
        <h3>Sudoku Solver</h3>
        <p>Sudoku Solver is a web application that can generate or solve sudoku problems using simulated annealing, an optimization algorithm.</p>
        <a href="https://sudoku-solver-sa.netlify.app/">View Project</a>
        <a href="https://github.com/dsbalico/sudoku-solver-using-simulated-annealing">View Github</a>
      </div>
      <div className="project-item">
        <h3>Probability Pick</h3>
        <p>Probability Pick is a PCSO Lotto Number Generator that calculates the likelihood of selecting winning numbers based on historical draw data.</p>
        <a href="https://probability-pick.netlify.app/">View Project</a>
        <a href="https://github.com/dsbalico/pcso-lotto-number-generator">View Github</a>
      </div>
    </section>
  );
};

export default Projects;
