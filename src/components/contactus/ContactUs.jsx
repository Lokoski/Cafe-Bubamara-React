import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import image from "../../assets/images/contact-image.png";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_kg3yLgNkUstEO86KHoLJY";

  const onSubmit = (data, reset) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
      userID
    );
    reset.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Thank you! Someone will be in touch soon.");
      })
      .catch((err) => {
        setErrorMessage("Something went wrong! Please try again");
      });
  };

  return (
    <div>
      <NavBar />
      <div className="contact-container">
        <div className="contact-image">
          <img src={image} alt="" />
          <h5>Find Us</h5>
        </div>
        <div className="contact-title">
          <h1>Out Contact and Location</h1>
        </div>

        <p className="contact-address">
          <i className="fa fa-map-marker-alt fa-lg" aria-hidden="true" />
          263 Parker Ave, Clifton, NJ 07011, United States
        </p>

        <p className="contact-email">
          <i className="fa fa-envelope fa-lg" />
          cafebubamara.nj@gmail.com
        </p>
        <p className="contact-phone">
          <i className="fa fa-phone fa-lg" />
          +1 973-928-1371
        </p>

        <span className="success-message">{successMessage}</span>
        <span className="error-message">{errorMessage}</span>

        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          {/*--NAME INPUT--*/}
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            name="name"
            {...register("name", {
              required: "Required",
              maxLength: 20,
              message: "Please enter a name with 20 characters or less!",
            })}
          />
          <span className="error-message">
            {errors.name && errors.name.message}
          </span>

          {/*--EMAIL INPUT--*/}
          <input
            type="text"
            className="form-control"
            placeholder="Your Email Address"
            name="email"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]{2,}$/i,
                message: "Invalid email!",
              },
            })}
          />
          <span className="error-message">
            {errors.email && errors.email.message}
          </span>
          {/*--*/}
          {/*--MESSAGE INPUT--*/}
          <textarea
            className="form-control"
            placeholder="What can we help you with?"
            name="message"
            {...register("message", {
              required: "Please add a message",
            })}
          />
          <span className="error-message">
            {errors.message && errors.message.message}
          </span>
          <button className="contact-button" type="submit">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
