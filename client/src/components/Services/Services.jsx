
import { motion } from "framer-motion";
import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import s1 from "./s1.svg";
import s2 from "./s2.svg";
import s3 from "./s3.svg";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { FaCode } from 'react-icons/fa';

const Services = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div>
      <section id="services" className="services-wrapper mt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mb-4">
            <span className="subtitle">What I can do for you</span>
            <h2>My Awesome Service</h2>
            <p>There are many variations of Lorem ipsum available, <br className="d-none d-md-block" />
              but the majority have suffered alteration.</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-md-start text-center">
                <img src={s1} alt="Servic" className="img-fluid mb-4"/>
                <h3>Business Stratagy</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-md-start text-center">
                <img src={s2} alt="Servic" className="img-fluid mb-4"/>
                <h3>Website Development</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-md-start text-center">
                <img src={s3} alt="Servic" className="img-fluid mb-4"/>
                <h3>Marketing & Reporting</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Services;

// import React, { useContext } from "react";
// import "./Services.css";
// import Card from "../Card/Card";
// import HeartEmoji from "../../img/heartemoji.png";
// import Glasses from "../../img/glasses.png";
// import Humble from "../../img/humble.png";
// import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
// import Resume from './resume.pdf';

// const Services = () => {
//   // context
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

//   // transition
//   const transition = {
//     duration: 1,
//     type: "spring",
//   };

//   return (
//     <div className="services" id="services">
//       {/* left side */}
//       <div className="awesome">
//         {/* dark mode */}
//         <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
//         <span>services</span>
//         <p>
//           Lorem ispum is simpley dummy text of printing of printing Lorem
//           <br />
//           ispum is simpley dummy text of printing
//         </p>
//         <a href={Resume} download>
//           <button className="button s-button">Download CV</button>
//         </a>
//         <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
//       </div>
//       {/* right */}
//       <div className="cards">
//         {/* first card */}
//         <motion.div
//           initial={{ left: "25rem" }}
//           whileInView={{ left: "14rem" }}
//           transition={transition}
//         >
//           <Card
//             emoji={HeartEmoji}
//             heading={"Design"}
//             detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
//           />
//         </motion.div>
//         {/* second card */}
//         <motion.div
//           initial={{ left: "-11rem", top: "12rem" }}
//           whileInView={{ left: "-4rem" }}
//           transition={transition}
//         >
//           <Card
//             emoji={Glasses}
//             heading={"Developer"}
//             detail={"Html, Css, JavaScript, React, Nodejs, Express"}
//           />
//         </motion.div>
//         {/* 3rd */}
//         <motion.div
//           initial={{ top: "19rem", left: "25rem" }}
//           whileInView={{ left: "12rem" }}
//           transition={transition}
//         >
//           <Card
//             emoji={Humble}
//             heading={"UI/UX"}
//             detail={
//               "Lorem ispum dummy text are usually use in section where we need some random text"
//             }
//             color="rgba(252, 166, 31, 0.45)"
//           />
//         </motion.div>
//         <div
//           className="blur s-blur2"
//           style={{ background: "var(--purple)" }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Services;

