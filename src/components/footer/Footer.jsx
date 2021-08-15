import React from "react";
import logo from "../../assets/images/logo.png";
import { MDBIcon } from "mdb-react-ui-kit";

const Footer = () => {
  function ScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth", cursor: "pointer" });
  }
  return (
    <footer className="footer-container">
      <a href="/home" onClick={ScrollToTop}>
        <img className="footer-logo" src={logo} alt="" />
      </a>
      <p>263 Parker Ave</p>
      <p> Clifton, NJ 07011</p>
      <p>(973) 928-1371</p>
      <p>cafebubamara@gmail.com</p>
      <p>Hours of Operation: Daily 8am - 11pm</p>
      <div className="footer-icons">
        <MDBIcon fab icon="facebook" size="3x" />
        <MDBIcon fab icon="instagram" size="3x" />
        <MDBIcon fab icon="yelp" size="3x" />
      </div>
    </footer>
  );
};

export default Footer;
