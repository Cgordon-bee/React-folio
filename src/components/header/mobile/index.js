import React from "react";
import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
    return (<div className="mobile">
    <div className="close-icon" onClick= {() => setIsOpen(!isOpen)}>
     <i class="fi fi-rr-Cross-circle"></i>
    </div>
    <div className="mobile-options">
        <div className="mobile-option">

            <a href="projects">
              <i class="fi-rr-Box-alt option-icon"></i>Projects</a>
            </div>
     
        <div className="mobile-option">
          <a href="#skills">
            <i class=" fi-rr-Laptop option-icon"></i> Skills</a>
        </div>
        <div className="mobile-option">
            <a href="#work">
            <i class="fi fi-rr-Briefcase"></i> Work</a>
      </div>
        <div className="mobile-option">
      <a href="#contact">Contact</a>
      </div>
   </div>

</div>

    );

      
}

export default Mobile;
