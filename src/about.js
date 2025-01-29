import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <p className="about-description">
        I'm Nandhakumar, a passionate Full Stack Developer with experience in building
        scalable web applications. I enjoy working on innovative projects and solving
        challenging problems. I constantly strive to improve my skills and learn new
        technologies to stay ahead in this ever-evolving tech world.
      </p>

      <div className="about-details">
        <h2 className="details-title">Area of Interest</h2>
        <p className="details-content">Software Engineering</p>
        <p className="details-content">Web Development</p>

        <h2 className="details-title">Hobbies</h2>
        <p className="details-content">Driving</p>
        <p className="details-content">Watching Movies</p>
        <p className="details-content">Exploring New Technologies</p>
      </div>

      <div className="additional-section">
        <h2 className="additional-title">Future Goals</h2>
        <p className="additional-content">
          I aim to become an expert in cloud technologies and contribute to building
          efficient and scalable applications that solve real-world problems. I am
          particularly interested in AI/ML integrations and plan to explore these fields
          further.
        </p>
      </div>
    </div>
  );
}

export default About;
