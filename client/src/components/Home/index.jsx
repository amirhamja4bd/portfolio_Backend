import React from 'react';
import Navbar from '../Navbar/Navbar';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Services from '../Services/Services';
import Experience from '../Experience/Experience';
import Portfolio from '../Portfolio/Portfolio';
import Testimonial from '../Testimonials/Testimonial';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Works from '../Works/Works';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            <About/>
            <Services />
            <Skills/>
            <Experience />
            {/* <Works /> */}
            <Portfolio />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
