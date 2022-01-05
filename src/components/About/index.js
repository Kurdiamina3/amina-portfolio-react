import React from 'react';
import Picture from "../../img/Mugshot.png";

function About() {
  return (
    <div className="viewThree" id="about">
            <div className="row">
                <div className="col-md about-left">
                    <img src={Picture} className="about-photo img-fluid" alt="Me"></img>
                </div>
                <div className="col-md">
                    <h3 className="viewTitle" id="aboutTitle">ABOUT</h3>
                    <div className="row align-self-center bioText">
                        <p className="bio">I am what others may call a Developing Software Developer. I call myself the Baby Developer. I'm just a sponge absorbing brand new material everytime I open my laptop, and it has been a wild ride. I'm on a rollercoaster everyday, and it excites me. I am excited to be learning everyday. </p>
                        <p className="bio"><span className="skillHeader">Some skills I bring to the table:</span>
                            <ul className=" skillList text-center">
                                <li className="skill">Veterinary Assistant(special love for Animals)</li>
                                <li className="skill">JavaScript</li>
                                <li className="skill">ReactJS</li>
                                <li className="skill">HTML & CSS</li>
                                <li className="skill">Node</li>
                                <li className="skill">Express</li>
                                <li className="skill">SQL</li>
                                <li className="skill"></li>
                                <li className="skill">Project Management</li>
                            </ul>
                        </p>
                        <p className="bio">I look forward to working with you!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;