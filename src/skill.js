
import React from 'react';
import './skill.css';

function Skills() {
  
  const downloadResume = () => {
    const resumeUrl = process.env.PUBLIC_URL + '/nandha.pdf'; 
    console.log(`Downloading from: ${resumeUrl}`);
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Resume.pdf'; 
    link.click();
  };

  return (
    <div className="skills">
      <h1>My Skills</h1>
      <ul>
        <li>C</li>
        <li>JavaScript</li>
        <li>HTML & CSS</li>
        <li>C++</li>
        <li>Git & GitHub</li>
        <li>Python</li>
      </ul>

      <div className="skills-category">
        <h3>Tools & Technologies</h3>
        <ul>
          <li>
            VS Code: <progress value="90" max="100"></progress>
          </li>
          <li>
            Canva: <progress value="80" max="100"></progress>
          </li>
          <li>
            GitHub: <progress value="85" max="100"></progress>
          </li>
        </ul>
      </div>

      <div className="resume-download-container">
        <div className="new">
          <h1>Resume as PDF</h1>
        </div>
        <button onClick={downloadResume} className="download-btn">
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default Skills;
