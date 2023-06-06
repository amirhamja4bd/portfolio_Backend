import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id='experience' className="pt-5">
      <div className="text-center">
        <span style={{ color: darkMode ? 'white' : '' }} className="subtitle">Experience</span>
        <h2>Self Experience</h2>
      </div>

    <div className="experience mt-5">
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--primary-color)':''}}>3+</div>
        <span  style={{color: darkMode?'white':''}}>years </span>
        <span>Self Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--primary-color)':''}}>4+</div>
        <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>Self Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--primary-color)':''}}>1+</div>
        <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>Sold Project</span>
      </div>
    </div>
    </div>
  );
};

export default Experience;
