import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import express from "../../images/sliderStacks/icons8-express-js.svg";
import reactjs from "../../images/sliderStacks/reactjs.png";
import nodejs from "../../images/sliderStacks/icons8-nodejs.svg";
import mongodb from "../../images/sliderStacks/icons8-mongo-db-96.png";

import js from "../../images/sliderStacks/icons8-javascript-128.png";

const Carousal = () => {
  const settings = {
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 2000,
    arrows: true,
    infinite: true, // Enable infinite loop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };

  const slides = [
    { id: 1, image: express }, // Add image property to each slide
    { id: 2, image: reactjs }, // Include img1 for all slides
    { id: 3, image: nodejs },
    { id: 4, image: mongodb },
    { id: 5, image: js },
  ];

  return (
    <div className="px-4 py-8 2xl:max-w-7xl mx-auto">
      <div className="w-10/12 mx-auto">
        {/* Add padding for better layout */}
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={slide.id} className="px-2">
              <div className="w-30 h-28 md:h-32  rounded-lg bg-white shadow-md flex justify-center items-center">
                {slide.image && (
                  <img
                    src={slide.image}
                    alt={slide.content}
                    className="max-h-full max-w-full object-contain"
                  />
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousal;
