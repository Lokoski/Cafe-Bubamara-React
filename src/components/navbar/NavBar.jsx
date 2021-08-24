import logo from "../../assets/images/Cafe_Bubamara_Logo_.png";
import React, { useState, useEffect } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);

  return (
    <div className={`${isMobile ? "sticky-top" : ""}`}>
      <img className="logo" src={logo} alt="logo" />
      <Navbar
        className={`${isMobile ? "": "navbar"}`}
        collapseOnSelect
        expand="lg"
        bg="black"
        variant="light"
      >
        <div className="social-icons">
          <MDBIcon fab icon="facebook" size="2x" />
          <MDBIcon fab icon="instagram" size="2x" />
          <MDBIcon fab icon="yelp" size="2x" />
        </div>

        {/* <Navbar.Brand
            to="home"
            smooth={true}
            className="navbar-brand"
            href="#"
          >
            <img href="/home" className="logo" src={logo} alt="logo" />
          </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span>
            <FontAwesomeIcon className="hamburgerMenu" icon={faBars} />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
            <ul className="navbar-nav mr-auto mt-0">
              <li className="nav-item mt-0">
                <Nav.Link eventKey="1" className="nav-link" href="#home">
                  Home
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link eventKey="2" className="nav-link" href="#about">
                  About Us
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link eventKey="3" className="nav-link" href="#menu">
                  Menu
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  eventKey="3"
                  className="nav-link"
                  href="#order-online"
                >
                  Order Online
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  eventKey="4"
                  smooth={true}
                  className="nav-link"
                  href="#contact"
                >
                  Contact Us
                </Nav.Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
