import logo from "../../assets/images/Cafe_Bubamara_Logo_.png";
import React, { useState, useEffect } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  //Navbar shows up on scroll

  // useEffect(() => {
  //   window.addEventListener("scroll", (e) => {
  //     if (stuck === false) {
  //       if (window.pageYOffset > 715) {
  //         setStuck(true);
  //       }
  //     } else {
  //       if (window.pageYOffset < 715) {
  //         setStuck(false);
  //       }
  //     }
  //   });
  // }, [stuck]);

  

  return (
    <div className={`${isMobile ? "sticky-top" : ""}`}>
    <img className="logo" src={logo} alt="logo" />
      <Navbar
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
              <FontAwesomeIcon
                className="hamburgerMenu"
                icon={faBars}
              />
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto ">
              <ul className="navbar-nav mr-auto mt-0">
                <li className="nav-item mt-0">
                  <Nav.Link eventKey="1" className="nav-link" href="#home">
                    Home
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link eventKey="2" className="nav-link" href="#about" >
                    About Us
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link eventKey="3" className="nav-link" href="#projects">
                    Menu
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link eventKey="3" className="nav-link" href="#projects">
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
