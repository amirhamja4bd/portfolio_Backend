import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import portfolio from "../../assets/img/portfolio.png";

const Footer = () => {
  return (
    <section id="contact" class="footer_wraper mt-3 mt-md-0">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 col-md-6 text-center text-md-start">
            <div class="footer-logo mb-3 mb-md-0">
              {/* <p>Portfolio</p> */}
              <img src={portfolio} class="img-fluid" alt=""/>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <ul class="list-unstyled d-flex justify-content-center justify-content-md-end justify-content-lg-center social-icon mb-3 mb-md-0">
              <li>
                <a href="https://www.instagram.com/amirhamja360/" target="_blank"><FaInstagram className="mb-1"/></a>
              </li>
              <li>
                <a href="https://www.facebook.com/amirhamja360" target="_blank"><FaFacebookF className="mb-1"/></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/amirhamja656/" target="_blank"><FaLinkedinIn className="mb-1"/></a>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="copyright-text text-lg-start text-center mb-3 mb-lg-0">
              <p class="mb-0 fs-6">Copyright © 2022 <a href="/">Amir_hamza</a>. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
