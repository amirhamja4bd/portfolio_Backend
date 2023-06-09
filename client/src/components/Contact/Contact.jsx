import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( 'service_yydnzpb' , 'template_83ohura' , form.current, 'nUom6pd-RNz0Lw-I8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <div>
      <section id="contact" className="contact-wrapper mb-5">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 order-2 order-lg-1 pe-lg-5 text-lg-start text-center">
            <span className="subtitle">Send Me a Message</span>
            <h2>Hire Me.</h2>
            <div className="row call_details mb-4">
              <label className="col-sm-3 col-lg-4">Call us Directly:</label>

              <div className="col-sm-9 col-lg-8 mb-3 mb-lg-2 text-md-start">
                <a href="tel:+8801756386529">+8801756386529</a>
              </div>

              <label className="col-sm-3 col-lg-4">Contact Email:</label>

              <div className="col-sm-9 col-lg-8 mb-lg-2 text-md-start">
                <a href="mailto:amirhamja4bd@gmail.com">amirhamja4bd@gmail.com</a>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <input type="text" name='user_name' className="form-control" placeholder="Your Name..." autoComplete="off"/>
              </div>
              <div className="mb-4">
                <input type="number" name='user_phone' className="form-control" placeholder="Your Phone..." autoComplete="off"/>
              </div>
              <div className="mb-4">
                <input type="email" name='user_email' className="form-control" placeholder="Your Email..." autoComplete="off"/>
              </div>
              <div className="mb-4">
                <textarea cols="40" rows="4" className="form-control" name='message' id="message" placeholder="Write a Message..." autoComplete="off"></textarea>
              </div>
              <button type="submit" className="main-btn">Submit</button>
            </form>
          </div>
          <div className="col-lg-6 order-1 mb-4 order-lg-1 mb-lg-0">
            <p>
            As a seasoned full-stack developer proficient in the MERN stack, I have successfully completed numerous projects, both individually and as part of a team. While reflecting on my past endeavors, I have recognized the importance of identifying areas for improvement and implementing updates to deliver even better outcomes. This commitment to continuous growth is what sets me apart.
            </p>
            <p>
            Throughout my project journey, I have honed my skills in front-end and back-end development, leveraging the power of MongoDB, Express.js, React.js, and Node.js. 
            </p>
            <p>
            Furthermore, I am currently seeking new opportunities to apply my expertise and contribute to a dynamic team. If you are looking for a passionate full-stack developer who embraces continuous learning, problem-solving, and collaborative teamwork, I would be thrilled to join your organization. Please feel free to reach out to me, and let's explore how I can contribute to your team's success.
            </p>
            {/* <img src={profilePic4} className="img-fluid rounded-3" alt=""/> */}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;