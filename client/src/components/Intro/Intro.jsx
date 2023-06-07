import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/mee.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <motion.div
      initial={{y: 25, opacity: 0}}
      animate={{ y: 0, opacity: 1}}
      transition={{ duration:0.5, delay: 0.5}}
      className="Intro pt-3  mx-auto" id="Intro">
        <div className="Intro">
          <div className="container-fluid">
            <div className="row justify-content-between align-items-center pt-4">
              <div className="col-lg-7 ps-lg-5 text-center text-lg-start mt-3">
                  <div className="my-3 my-lg-0">
                  <div className="col-sm-12 text-center text-md-start">
                      <h6 style={{ color: darkMode ? "var(--text-gray)" : "black" }} >WELCOME TO MY WORLD</h6>
                      <h1 style={{ color: darkMode ? "white" : "" }}>I'm Amir Hamza <br /></h1>
                      <span style={{ color: darkMode ? "white" : "black" }}>MERN Stack Developer</span>
                      <p className="mt-3">Seeking a junior-level web developer position where I can
                        use my passion for building dynamic web applications,
                        technical expertise, and creativity to deliver cutting-edge
                        solutions. I am committed to lifelong learning and a
                        collaborative mindset, and I am eager to work alongside
                        experienced professionals to enhance my skills and make
                        meaningful contributions to the organization's growth.
                      </p>
                      <div className="mt-4">
                          <a className="main-btn" href="https://drive.google.com/file/d/1uj5KcyRNQBMsihvMBrhOj76JXlctTsQn/view?usp=drive_link">Download CV</a>
                      </div>
                  </div>
                  <div className="i-icons d-flex justify-content-md-start justify-content-center mt-5">
                    <a href="https://github.com/amirhamja4bd" target="_blank">
                      <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/amirhamja656/" target="_blank">
                      <FaLinkedinIn />
                    </a>
                    <a href="https://www.facebook.com/amirhamja360" target="_blank">
                      <FaFacebookF />
                    </a>
                  </div>
                  </div>
              </div>
              <div className="col-lg-5 mb-4 mb-lg-0">
                <motion.img 
                  drag
                  dragConstraints={{ left: 0, top:0, right:0 , bottom:0 }}
                  dragElastic={0.7} 
                  src={boy} alt="" className="" style={{width:"90%"}}/>
              </div>
            </div>
          </div>
        </div>
    </motion.div>
  );
};

export default Intro;
