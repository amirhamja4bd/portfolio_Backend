import React, { useContext, useEffect, useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
import portfolio from "../../img/portfolio.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scroll) {
        setScroll(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <div
      className={`n-wrapper fixed-top  ${
        scroll ? "scrolled shadow-sm" : ""
      }`}
      id="Navbar"
      style={{
        // background: darkMode ? scroll ? "var(--secondery-color)" : "transparent" : scroll ? "var(--bg-white)" : "transparent",
        background: darkMode ? scroll && "transparent" : scroll && "transparent",
        color: darkMode ? scroll && "white" : scroll && "black" ,
        backdropFilter: scroll ? "blur(10px)" : "none",
      }}
    >
      <div className="n-left">
        <a href="/">
        <img src={portfolio} alt="" className="n-name ms-5"/>
        </a>
        {/* <a href="/" className={`n-name ms-5 text-white `} style={{color: "var(--primary-color)"}} >Portfolio</a> */}
        {/* <Toggle /> */}
      </div>
      <div className="n-right me-5">
        <div className="n-list mt-3">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link to="Intro" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Toggle />
        {/* <Link to="contact" spy={true} smooth={true}>
        <button className="main-btn">Contact</button>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;



// import React, { useContext } from "react";
// import Toggle from "../Toggle/Toggle";
// import "./Navbar.css";
// import { Link } from "react-scroll";
// import { themeContext } from "../../Context";
// const navbar = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

//   return (
//     <div className={`n-wrapper fixed-top shadow-sm `} id="Navbar" 
//       style={{
//         background: darkMode ? "var(--secondery-color)" : "var(--bg-white)",
//         color: darkMode ? "white" : "black",
//       }}>
//       <div className="n-left">
//         <div className="n-name ms-5">Portfolio</div>
//         {/* <Toggle /> */}
//       </div>
//       <div className="n-right me-5">
//         <div className="n-list mt-3">
//           <ul style={{ listStyleType: "none" }}>
//             <li>
//               <Link to="Intro" spy={true} smooth={true}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="about" spy={true} smooth={true}>
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="services" spy={true} smooth={true}>
//                 Serivces
//               </Link>
//             </li>
//             <li>
//               <Link to="experience" spy={true} smooth={true}>
//                 Experience
//               </Link>
//             </li>
//             <li>
//               <Link to="portfolio" spy={true} smooth={true}>
//                 Protfolio
//               </Link>
//             </li>
//             <li>
//               <Link to="testimonial" spy={true} smooth={true}>
//                 Testimonial
//               </Link>
//             </li>
//             <li>
//               <Link to="contact" spy={true} smooth={true}>
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <Toggle />
//         {/* <Link to="contact" spy={true} smooth={true}>
//         <button className="main-btn">Contact</button>
//         </Link> */}
//       </div>
//     </div>
//   );
// };

// export default navbar;
