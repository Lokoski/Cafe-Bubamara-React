import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import image from "../../assets/images/contact-image.png";
const ContactUs = () => {
  return (
    <div>
      <NavBar />
      <div className="contact-container">
        <div className="contact-image">
          <img src={image} alt="" />
          <div className="contact-title">
            <h1>Out Contact and Location</h1>
            <p className="contact-address">
              <i className="fas fa-map-marker-alt fa-lg" />
              263 Parker Ave, Clifton, NJ 07011, United States
            </p>
            <p className="contact-email">
              <i className="fas fa-envelope fa-lg" />
              cafebubamara.nj@gmail.com
            </p>
            <p className="contact-phone">
              <i className="fas fa-phone fa-lg" />
              +1 973-928-1371
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
