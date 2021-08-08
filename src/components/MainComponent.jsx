import React from 'react';
import NavBar from './navbar/NavBar';
import HomePage from './homepage/HomePage';
import AboutUs from './aboutus/AboutUs';
import Menu from './menu/Menu';
import ContactUs from './contactus/ContactUs';
import Gallery from './gallery/Gallery';
import Items from './newestitems/Items'
import './navbar/NavBar.css';
import './homepage/HomePage.css';
import './gallery/Gallery.css';
import './newestitems/Items.css'

const MainComponent = () => {
    return (
        <div className="main-container">
            <NavBar />
            <HomePage />
            <Gallery />
            <Items />
        </div>
    )
}

export default MainComponent
