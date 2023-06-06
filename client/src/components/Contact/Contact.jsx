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
            <span className="subtitle">My Complete Project</span>
            <h2>Hire Me.</h2>
            <div className="row call_details mb-4">
              <label className="col-sm-3 col-lg-4">Call us Directly:</label>

              <div className="col-sm-9 col-lg-8 mb-3 mb-lg-2 text-md-start">
                <a href="javascript:void(0)">+8801756386529</a>
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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, temporibus dolores fugiat nostrum laboriosam doloribus harum! Minus omnis ad rerum autem voluptatem ipsum atque. Dolorem esse cumque magni natus quia nisi, aliquam nam pariatur debitis sapiente, laborum eveniet eaque quam dolores tempore cupiditate necessitatibus quos placeat nihil aliquid, fuga eius ipsum minus! Obcaecati quaerat dolorem quas id vel sequi eum nemo quam laboriosam necessitatibus error voluptas fuga odio eligendi, ut inventore excepturi dignissimos repellat in itaque. Nobis ratione eos est voluptate odit itaque quasi Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus hic iure placeat eveniet possimus sed quas officia laboriosam fuga quaerat, ab vel temporibus fugit eligendi quos, repellat unde veniam ea. </p>
            {/* <img src={profilePic4} className="img-fluid rounded-3" alt=""/> */}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;