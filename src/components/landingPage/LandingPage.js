import React from "react";
import Carousal from "./Carousal";
import HeroSection from "./HeroSection";

import InfoCards from "./InfoCards";
import { useDispatch } from "react-redux";
import { isModal } from "../../state";
import ContactUsModal from "../modals/ContactUsModal";
import MyWork from "./MyWork";
import AboutMe from "./AboutMe";

import logo from "../../images/logo/logo.svg";

function LandingPage() {
  const dispatch = useDispatch();
  const launcherModal = () => {
    dispatch(isModal(true));
  };
  return (
    <>
      <HeroSection />
      <InfoCards />
      <Carousal />
      <MyWork />
      <AboutMe />
      <ContactUsModal />
      <div className="fixed bottom-7 right-7">
        <button
          onClick={launcherModal}
          className="w-12 h-12 bg-white rounded-full transform transition-transform duration-300 hover:scale-110"
        >
          <img className="w-full" src={logo} alt="logo" />
          {/* <FontAwesomeIcon icon={faAngleUp} /> */}
        </button>
      </div>
    </>
  );
}

export default LandingPage;
