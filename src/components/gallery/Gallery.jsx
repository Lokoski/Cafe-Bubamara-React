import React from "react";
import GalleryCard from "./GalleryCard";
import { CARD_IMAGES } from "../../shared/card_images";

const Gallery = () => {

  return (
    <>
      <div className="gallery-container">
        <h1 className="gallery-title">Welcome to Cafe Bubamara</h1>
        <p className="gallery-paragraph">
          Our goal is good food, good people, and good times! <br /> Join us in
          sharing an experience and over a great meal.
        </p>
        <div className="card-container">
          {CARD_IMAGES.map((image) => {
            return <GalleryCard key={image.id} image={image.image} />;
          })}
        </div>
        <p className="gallery-paragraph">Tag us with @cafebubamara to be featured!</p>
      </div>
    </>
  );
};

export default Gallery;
