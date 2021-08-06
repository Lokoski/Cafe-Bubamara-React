import logo from "../../assets/images/Cafe_Bubamara_Logo_.png";
import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";

const NavBar = () => {
  const [showNavCentred, setShowNavCentred] = useState(false);

  return (
    <header>
    <img className="logo" src={logo} alt='logo' />
    <MDBNavbar expand='lg' className='nav-bar'>
      <MDBContainer fluid className='nav-container' >
      <div className="social-icons">
        <MDBIcon fab icon="facebook" size="2x" />
        <MDBIcon fab icon="instagram" size="2x" />
        <MDBIcon fab icon="yelp" size="2x" />
    </div>
        <MDBNavbarToggler
          type='button'
          data-target='#navbar'
          aria-controls='navbar'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavCentred(!showNavCentred)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavCentred} center id='navbar'>
          <MDBNavbarNav fullWidth={false} >

            <MDBNavbarItem className="items-container">
              <MDBNavbarLink  className='nav-items' active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <i class="fas fa-circle"></i>
            <MDBNavbarItem>
              <MDBNavbarLink className='nav-items' href='#'>About Us</MDBNavbarLink>
            </MDBNavbarItem>
            <i class="fas fa-circle"></i>
            <MDBNavbarItem>
              <MDBNavbarLink className='nav-items' href='#'>Menu</MDBNavbarLink>
            </MDBNavbarItem>
            <i class="fas fa-circle"></i>
            <MDBNavbarItem>
              <MDBNavbarLink className='nav-items' href='#'>Contact Us</MDBNavbarLink>
            </MDBNavbarItem>
            <i class="fas fa-circle"></i>
            <MDBNavbarItem>
              <MDBNavbarLink className='nav-items' href='#'>Order Online</MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    {/* <header id="header">
    		<nav className="navbar navbar-expand-lg navbar-dark sticky-top">
    			<div class="container">
    				<a class="navbar-brand "href="index.html"><img class="logo img-fluid" src={logo} alt="logo" /> </a>
    				<button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbar">
    					<span class="navbar-toggler-icon"></span>
    				</button>
    				<div class="collapse ml-auto navbar-collapse" id="navbar">
    					<ul class="navbar-nav">
    						<li class="nav-item active"><a class="nav-link" href="#aboutus">About</a></li>
    						<li class="nav-item"><a class="nav-link" href="menu.html">Menu</a></li>
    						<li class="nav-item"><a class="nav-link" href="#gallery">Gallery</a></li>
    						<li class="nav-item"><a class="nav-link" href="#getInTouch">Contact</a></li>
    					</ul>
    				</div>
    			</div>
    		</nav>
    	</header> */}

     </header>
    // <header id="header">
    //  <a class="navbar-brand " href="index.html">
    //         <img class="logo img-fluid" src={logo} alt="logo" />
    //       </a>
    //   <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
    //     <div class="container">
    //       <MDBNavbarToggler
    //         type="button"
    //         data-target="#navbar"
    //         aria-controls="navbar"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //         onClick={() => setShowNavCentred(!showNavCentred)}
    //       >
    //         <MDBIcon icon="bars" fas />
    //       </MDBNavbarToggler>
    //       <div class="collapse ml-auto navbar-collapse" id="navbar">
    //         <ul class="navbar-nav">
    //           <li class="nav-item active">
    //             <a class="nav-link" href="#aboutus">
    //               About
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link" href="menu.html">
    //               Menu
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link" href="#gallery">
    //               Gallery
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link" href="#getInTouch">
    //               Contact
    //             </a>
    //           </li>
    //         </ul>
    //         <div>
    //           <div class="col-md-4 col-xl-2">
    //             <span
    //               class="btn btn-md btn-dark text-nowrap"
    //               href="#reserveModal"
    //               role="button"
    //               id="reserveButton"
    //             >
    //               Book a Table
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  );
};

export default NavBar;
