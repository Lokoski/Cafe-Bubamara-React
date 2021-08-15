import React from "react";
import Carousel from "./Carousel";
import newspaper from "../../assets/images/Bubamara_Article.png";

const Media = () => {
  return (
    <div className="media-container">
      {/* <h1>Media & Articles</h1> */}
      <div className="media">
        <div className="media-image">
          <img src={newspaper} alt="" />
        </div>
        <div className="media-carousel">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Media;
