import React from "react";
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = () => {
  return (
    <Carousel className="carousel-container" autoPlay={true} stopOnHover={true} showThumbs={false} showStatus={false} showArrows={false}>
      <article className="carousel">
        <p className="carousel-paragraph">
          “Cafe bubamara is delighting the senses of New Jersey with the taste
          of Balkan Cuisine”
        </p>
        <p>Miguel Amaya, ABC7 NewsNY</p>
      </article>
      <article className="carousel">
        <p className="carousel-paragraph">
          “Cafe bubamara is delighting the senses of New Jersey with the taste
          of Balkan Cuisine”
        </p>
        <p>Miguel Amaya, ABC7 NewsNY</p>
      </article>
      <article className="carousel">
        <p className="carousel-paragraph">
          “Cafe bubamara is delighting the senses of New Jersey with the taste
          of Balkan Cuisine”
        </p>
        <p>Miguel Amaya, ABC7 NewsNY</p>
      </article>
      <article className="carousel">
        <p className="carousel-paragraph">
          “Cafe bubamara is delighting the senses of New Jersey with the taste
          of Balkan Cuisine”
        </p>
        <p>Miguel Amaya, ABC7 NewsNY</p>
      </article>
      
    </Carousel>
  );
};

export default CarouselComponent;
