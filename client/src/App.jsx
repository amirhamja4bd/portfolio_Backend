import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import About from "./components/About/About";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // let nav = document.querySelector(".n-wrapper");
  // window.onscroll = function () {
  //     if(document.documentElement.scrollTop > 20){
  //         nav.classList.add("header-scrolled");
  //     }else{
  //         nav.classList.remove("header-scrolled");
  //     }
  // }

  // let navBar = document.querySelectorAll(".nav-link");
  // let navCollapse = document.querySelector(".navbar-collapse.collapse");
  // navBar.forEach(function(a){
  //     a.addEventListener("click", function(){
  //         navCollapse.classList.remove("show");
  //     })
  // })


  return (
    <div
      className="App"
      style={{
        background: darkMode ? "var(--bg-dark-blue)" : "var(--bg-white)",
        color: darkMode ? "white" : "black",
      }}
    >
      
      <Navbar />
      <Intro />
      <About/>
      <Services />
      <Experience />
      {/* <Works /> */}
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
