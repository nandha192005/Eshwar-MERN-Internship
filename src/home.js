import React from "react";
import "./home1.css";


import './PXL_20240906_104314003.PORTRAIT.jpg'
import backgroundImage from './R.jpg';

import '@fortawesome/fontawesome-free/css/all.min.css';



function Home() {
  return (
    <div className="b">
    <div className="profile-container">
      <div className="profile-image"></div>
      <div className="profile-info">
        <h1>
          Hi, I'm <span className="name">Nandhakumar</span>{" "}
          <span className="wave">👋</span>
        </h1>
        <h2>I'm a Full Stack Developer.</h2>
        <ul className="details">
          
          <li>🌍 life on SECE</li>
          
          <li>✉ nandhakumar1905@gmail.com</li>
        </ul>
        <div className="social-icons">
  <a href="#" className="icon">
    <i className="fab fa-facebook-f"></i> {/* Facebook */}
  </a>
  <a href="" className="icon">
    <i className="fab fa-instagram"></i> {/* Instagram */}
  </a>
  <a href="https://github.com/nandha192005" className="icon">
    <i className="fab fa-github"></i> {/* GitHub */}
  </a>
  <a href="https://www.linkedin.com/in/nandhakumar-k-ai-ml-062008314/" className="icon">
    <i className="fab fa-linkedin-in"></i> {/* LinkedIn */}
  </a>
  <a href="#" className="icon">
    <i className="fab fa-twitter"></i> {/* Twitter */}
  </a>
</div>

      </div>
    </div>
    </div>
  );
}

export default Home;
