
import { motion } from "framer-motion";
import React, { useContext } from "react";
import "./Services.css";
import s1 from "./s1.svg";
import s2 from "./s2.svg";
import s3 from "./s3.svg";
import { themeContext } from "../../Context";
import { FaCode } from 'react-icons/fa';

const Services = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const SValue = [
    {
        image: s1,
        title:  "Frontend",
        description:  "Building engaging user interfaces with React, Next.js, and JavaScript.",
    },
    {
        image: s2,
        title:  "Backend",
        description: "Developing server-side applications with Node.js, Express.js, and MongoDB.",
    },
    {
        image: s3,
        title:  "MERN Full Stack",
        description:  "Creating end-to-end web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
    },
    
]

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
          {SValue?.map((s, i)=>(
          <div key={i} className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-md-start text-center">
                <img src={s?.image} alt="Servic" className="img-fluid mb-4"/>
                <h3>{s?.title}</h3>
                <p>{s?.description}</p>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Services;