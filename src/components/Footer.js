import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { showAlert } from "../state";

const Footer = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(showAlert("feature not available yet", "failure", true));
    setTimeout(() => {
      dispatch(showAlert("", "", false));
    }, 4000);
  };
  return (
    <>
      <div className="w-full relative -top-14">
        <div className="lg:flex lg:justify-center lg:items-center text-white bg-blue-950 w-11/12 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl m-auto rounded-2xl text-center p-10 sm:space-y-4 lg:space-y-0">
          <div className="lg:w-1/4 text-2xl font-bold">
            <h1>Start a project</h1>
          </div>
          <div className="lg:w-1/4">
            <p>
              Interested in working together? We should queue up a time to chat.
              I’ll buy the coffee.
            </p>
          </div>
          <div className="lg:w-1/4">
            <button
              onClick={handleClick}
              className="border border-amber-400 py-3 px-5 rounded-3xl bg-transparent hover:bg-amber-400 transition-all duration-300 hover:text-blue-950"
            >
              Let's do this
            </button>
          </div>
        </div>
      </div>
      <div className="text-center space-y-4 md:flex md:content-center md:justify-between md:px-10 mx-auto my-20 md:max-w-5xl lg:max-w-7xl">
        <div className="my-4 md:flex space-x-6 text-white">
          <h1>Muhammad Arham</h1>
          <h1>Copyright © 2024 Arham.com</h1>
        </div>

        <div className="space-x-4">
          <a
            href="https://www.linkedin.com/in/muhammadarham402/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/arhammalyk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
