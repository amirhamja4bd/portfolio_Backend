import React from 'react';
import './about.css'
import boy from "../../assets/img/about.png";

const About = () => {
    return (
        <div>
            <div id="about" className="abuot-wrapper">
            <div className="container">
                <div className="row justify-content-between align-items-center mt-4">
                <div className="col-lg-5 mb-4 mb-lg-0">
                    <img src={boy} className="img-fluid rounded-3" alt=""/>
                </div>
                <div className="col-lg-7 ps-lg-5 text-center text-lg-start">
                    <div className="my-3 my-lg-0">
                    <span className="subtitle">My About Details</span>
                    <h2>About Me</h2>
                    </div>

                    <div className="mt-4">
                    <p>As a MERN stack developer, I am passionate about building scalable high-quality web applications that deliver exceptional user experiences. With extensive experience in both front-end and back-end development, I have a strong understanding of the entire web development process and can confidently work on every layer of the stack.</p>
                    <p>
                    I am a quick learner and a team player who enjoys collaborating with cross-functional teams to deliver innovative solutions to complex problems. I am always looking for new challenges and opportunities to expand my skills and knowledge in the field of web development.</p>
                    <p>
                    If you're interested in discussing potential collaborations or have any questions about my experience, please feel free to reach out to me.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;