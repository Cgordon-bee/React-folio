import React from 'react';
import SocialContact from '../../common/social-contacts';
import "./about.css";

function About() {
    return <div className="about"> 
            <div className="about-top">
             <div className="about-info">
             Hello there, my name is Carol , <span className="info-name">The Coding Smooth Operator "CSO".</span>
        <br /> Welcome to my site. I have obtained a full stack developer competency at Birmingham University. I have gained experience in the "MERN" stack. I'm very creative, logical with a fun sense of humour .  Coding gives me the ability to turn my ideas and the ideas of others into a reality.  I'm currently working as project Manager managing a Change Team.
                Take a look at my projects, be sure to revisit where further updates will be available.  My ultimate goal is to become a freelance /trainer in coding.  Wish me well!!
        <br />
        <br />
             </div>
             <div className="about-photo">
                 <img src={require("./assets/react-folio.png").default} className="picture" alt ="picture"/>
        </div>
    
    </div>
    <SocialContact />
 </div>;
    
}

export default About;
