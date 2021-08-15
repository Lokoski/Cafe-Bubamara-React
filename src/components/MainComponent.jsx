import React from 'react';
import NavBar from './navbar/NavBar';
import HomePage from './homepage/HomePage';
import AboutUs from './aboutus/AboutUs';
import Menu from './menu/Menu';
import ContactUs from './contactus/ContactUs';
import Gallery from './gallery/Gallery';
import Items from './newestitems/Items';
import Media from './media/Media';
import Footer from './footer/Footer';
import './navbar/NavBar.css';
import './homepage/HomePage.css';
import './gallery/Gallery.css';
import './newestitems/Items.css';
import './media/Media.css';
import './footer/Footer.css';

// carousel css import
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MainComponent = () => {
    return (
        <div className="main-container">
            <NavBar />
            <HomePage />
            <Gallery />
            <Items />
            <Media />
            <Footer />
        </div>
    )
}

export default MainComponent
