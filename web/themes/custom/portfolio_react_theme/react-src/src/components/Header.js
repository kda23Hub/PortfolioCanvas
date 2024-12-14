import React from 'react';

const Header = () => {
  return (
    <header className="App-header">
      <div className="header-content">
        <h1>Daniel Shan Balico</h1>
        <p>Full-Stack Developer</p>
        <p>Hello! 👋 How are you doing? 🤔</p>
        <p>I am a software engineer with expertise in full-stack web development. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards.</p>
        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="photo-section">
        <img src="path/to/your/photo.jpg" alt="Daniel Shan Balico" />
      </div>
    </header>
  );
};

export default Header;
