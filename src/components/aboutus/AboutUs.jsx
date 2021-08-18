import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import image_top_right from "../../assets/images/bubamara_fico.jpg";

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div className="aboutus-container">
        <h1 className="aboutus-title">Get to know us!</h1>
        <div className="paragraph-1">
          <p className="paragraph-1-top">
            Cafe Bubamara - located in Clifton, NJ’s historic Botany Village -
            is sure to delight your senses, transport you to a different place,
            and leave you craving more. Combining old-world eclecticisim with a
            romantic, modern aesthetic, the Cafe’s originality in style and
            design can be seen in its interior, just as in its exterior.
            Bubamara’s carefully curated and cultivated atmosphere invites you
            to indulge in its whimiscial and relaxed atmosphere, reminiscent of
            the glory days of Ex-Yugoslavia.
          </p>
          <br />
          <p className="paragraph-1-bottom">
            Cafe Bubamara’s unique atmosphere and design set it apart
            aesthetically, but its appetizing menu of Balkan favorites made
            according to traditional recipes is what makes all the difference
            and sets it apart. While enjoying Cafe Bubamara’s laid back
            ambiance, try homemade cakes and traditional Balkan cuisine such as
            burek, popara, ustipci, cevapi, djevrek, crepes, and many others.
            We’re sure these authentic dishes will soon become your favorite
            meals.
          </p>
        </div>

        {/* <div className="image-top-right"> */}
        <img className="image-top-right" src={image_top_right} alt="" />
        {/* </div> */}
        <p className="paragraph-3">
          Divided into two spaces, Cafe Bubamara boasts an intimate and cozy
          indoor seating area that makes you feel like you are sitting in
          someone’s dining room rather than a restaurant. Walk through the gates
          into the back patio, and Cafe Bubamara’s terrace takes you to a
          different world. The open-air patio is situated in a large wooden
          gazebo surrounded by carefully selected decor and Ex-YU imagery. The
          patio, open during the summers, is the perfect atmosphere to enjoy
          your favorite Bubamara classics.
        </p>
        {/* <div className="image-bottom-left"> */}
        <img className="image-bottom-left" src={image_top_right} alt="" />
        {/* </div> */}
        <div className="paragraph-4">
          <p className="paragraph-4-p">
            Ex-YU music from the 70s, 80s, and 90s fill the Cafe, taking you to
            a different time and place while you sit back, relax, and enjoy your
            drink or meal with friends and family. That is the spirit of Cafe
            Bubamara, which was created as a place for friends to gather
            together as a community, celebrate life, and enjoy in our shared
            love of food.
          </p>
          <img className="image-bottom-right" src={image_top_right} alt="" />
        </div>
        {/* <div className="image-bottom-right"> */}
       
        {/* </div> */}
        <p className="paragraph-5">
          Come join us and create new memories, indulge in delicious food, and
          enjoy time with your loved ones in the authentic atmosphere at Cafe
          Bubamara!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
