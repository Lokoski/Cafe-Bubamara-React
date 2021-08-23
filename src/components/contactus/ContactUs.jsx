import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import image from "../../assets/images/contact-image.png";

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

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
        setSuccessMessage("Thank you!");
      })
      .catch((err) => `Something went wrong! ${err}`);
  };

  return (
    <div>
      <NavBar />
      <div className="contact-container">
        <div className="contact-image">
          <img src={image} alt="" />
        </div>
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12 ">
              {/*--NAME INPUT--*/}
              <div className="text-center">
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
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>

              {/*--EMAIL INPUT--*/}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                  name="email"
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]{2,}$/i,
                      message: "Invalid email!",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
            </div>
            {/*--*/}
            <div className="col-md-6 col-xs-12">
              {/*--DESCRIPTION INPUT--*/}
              <div className="text-center">
                <textarea
                  className="form-control"
                  placeholder="What can I help you with?"
                  name="message"
                  {...register("message", {
                    required: "Please add a message",
                  })}
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.message && errors.message.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">
                Contact Me
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
