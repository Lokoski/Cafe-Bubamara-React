import React from 'react';
import NavBar from './navbar/NavBar';
import HomePage from './homepage/HomePage';
import AboutUs from './aboutus/AboutUs';
import Menu from './menu/Menu';
import ContactUs from './contactus/ContactUs';
import './navbar/NavBar.css'
import './homepage/HomePage.css'

const MainComponent = () => {
    return (
        <div className="main-container">
            <NavBar />
            <HomePage />
        </div>
    )
}

export default MainComponent
