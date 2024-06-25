import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
// import mainImg from "../../images/heroSection/IMG_8266 (1).jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

import arham from "../../images/heroSection/arhamFormal.svg";

function HeroSection() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["THOUGHT", "REAL WORLD", "VISION", "LESSONS"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    // Cleanup function to destroy the Typed instance
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="bg-black">
        <div className=" lg:max-w-7xl xl:max-w-screen-2xl mx-auto">
          <div className="lg:flex w-full lg:h-[650px]">
            <div className="order-1 lg:w-1/2 md:bg-black flex justify-end pt-16">
              {/* <img className="block lg:hidden" src={mainImg} alt="arham" /> */}
              {/* <img className="hidden lg:block" src={arham} alt="arham" /> */}
              <img src={arham} alt="heroImg" />
            </div>
            <div className="w-full bg-gradient-tobl bg-gradient-to-l from-black to-black lg:w-1/2 md:flex md:justify-center md:items-center">
              <div className="text-white w-9/12 p-6 md:p-12 ">
                <h1 className="lg:text-xl xl:text-3xl font-bold">
                  ACHIEVE TRUE GREATNESS
                </h1>
                <span className="text-xl" ref={typedElement}></span>
                <h2 className="lg:text-xl xl:text-3xl font-bold mt-3">
                  MUHAMMAD ARHAM - MERN Stack Developer
                </h2>
                <h3 className="lg:text-lg">
                  I'm an Software Engineer specializing in the MERN
                  stack, I am eager to dedicate my life to transforming lives
                  through innovation.
                </h3>
                {/* <button className="bg-black text-white px-3 py-1 md:px-5 md:py-2 rounded-md text-sm mt-4 transform transition-transform duration-300 hover:scale-110">
                  TALK
                </button> */}
                <div className="mt-6 space-x-3">
                  <button
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/muhammadarham402/",
                        "_blank"
                      );
                    }}
                    className="text-white hover:text-gray-300 mr-2 inline-flex items-center group relative" // Add "group" class
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    <span className="bg-gray-600 font-semibold p-1 rounded-md absolute top-full left-0 text-center text-xs text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                      muhammadarham402
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      window.open("https://github.com/arhammalyk", "_blank");
                    }}
                    className="text-white hover:text-gray-300 mr-2 inline-flex items-center group relative" // Add "group" class
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    <span className="bg-gray-600 font-semibold p-1 rounded-md absolute top-full left-0 text-center text-xs text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                      arhammalyk
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      window.location.href = `mailto:rahammalik402@gmail.com?subject=Hi%20from%20Your%20Website&body=Your%20message%20here`;
                    }}
                    className="text-white hover:text-gray-300 mr-2 inline-flex items-center group relative" // Add "group" class
                  >
                    <FontAwesomeIcon icon={faMailBulk} size="2x" />
                    <span className="bg-gray-600 font-semibold p-1 rounded-md absolute top-full left-0 text-center text-xs text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                      rahammalik402@gmail.com
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img src={malik} alt="" /> */}
    </>
  );
}

export default HeroSection;
