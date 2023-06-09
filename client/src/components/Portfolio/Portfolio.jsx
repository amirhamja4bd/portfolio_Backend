import React, { useContext, useState } from "react";
import "./Portfolio.css";
import "swiper/css";
import { PValue } from './Data';
import { themeContext } from "../../Context";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [filter, setFilter] = useState("all"); // Initial filter value is "all"

  // Filter projects based on the selected filter value
  const filteredProjects = filter === "all" ? PValue : PValue.filter(p => p.type === filter);

  return (
    <section id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mb-4">
            <span className="subtitle">My Complete Project</span>
            <h2>My Latest Project</h2>
            <p>
              Here are some of my personal projects and team projects, <br className="d-none d-md-block" />
              Check out my projects if you have time
            </p>
          </div>
        </div>
        <div className="row main  mx-auto">
          <div className="filter col-12 d-flex justify-content-center mb-5">
            <button className={filter === "all" ? "tab-btn active mx-2" : "tab-btn mx-2"} onClick={() => setFilter("all")}>
              All
            </button>
            <button className={filter === "personal" ? "tab-btn active mx-2" : "tab-btn mx-2"} onClick={() => setFilter("personal")}>
              Personal
            </button>
            <button className={filter === "team" ? "tab-btn active mx-2" : "tab-btn mx-2"} onClick={() => setFilter("team")}>
              Team
            </button>
          </div>
          {filteredProjects.map((p) => (
            <div key={p._id} className="col-lg-3 col-md-6 mb-4">
              <div className="card p-0 h-50 " onClick={() => navigate(`/project/${p._id}`)}>
                <span style={{ backgroundImage: `url(${p.thumbnail})` }} className="span"></span>
              </div>
              <div className="py-3 px-2 rounded-bottom">
                <p className="portfolio-title">{p.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;



// import React, { useContext } from "react";
// import "./Portfolio.css";
// import { Swiper, SwiperSlide } from "swiper/react"
// import "swiper/css";
// import Sidebar from "../../img/sidebar.png";
// import Ecommerce from "../../img/ecommerce.png";
// import HOC from "../../img/hoc.png";
// import MusicApp from "../../img/musicapp.png";
// import { themeContext } from "../../Context";

// const Portfolio = () => {

//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

//   const PValue = [
//     {
//         image: Sidebar,
//         title:  "Frontend",
//         description:  "Building engaging user interfaces with React, Next.js, and JavaScript.",
//     },
//     {
//         image: Ecommerce,
//         title:  "Backend",
//         description: "Developing server-side applications with Node.js, Express.js, and MongoDB.",
//     },
//     {
//         image: HOC,
//         title:  "MERN Full Stack",
//         description:  "Creating end-to-end web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
//     },
//     {
//         image: Ecommerce,
//         title:  "Backend",
//         description: "Developing server-side applications with Node.js, Express.js, and MongoDB.",
//     },
//     {
//         image: HOC,
//         title:  "MERN Full Stack",
//         description:  "Creating end-to-end web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
//     },
// ]

//   return (
//     <div className="portfolio" id="portfolio">
//       {/* heading */}
//       <span style={{color: darkMode?'white': ''}} className="subtitle">Recent Projects</span>
//       <h2>Portfolio</h2>

//       {/* slider */}
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={3}
//         grabCursor={true}
//         className="portfolio-slider"
//       >
//         {PValue?.map((p, i)=> (
//         <SwiperSlide>
//           <img src={Sidebar} alt=""  data-bs-toggle="modal" data-bs-target="#staticBackdrop"/>
//         </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Portfolio;
