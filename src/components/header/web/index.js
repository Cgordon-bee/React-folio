import React from 'react';
import "./web.css";


function Web() {
    return <div className="web">
        <div className="web-option">
            <a href="projects">
              <i class="fi-rr-Box-alt option-icon"></i>Projects</a>
            </div>
     
        <div className="web-option">
          <a href="#skills">
            <i class=" fi-rr-Laptop option-icon"></i> Skills</a>
        </div>
        <div className="web-option">
            <a href="#work">
            <i class="fi fi-rr-Briefcase"></i> Work</a>
      </div>
        <div className="web-option">
      <a href="#contact">Contact</a>
      </div>
    </div>;
}


export default Web;
