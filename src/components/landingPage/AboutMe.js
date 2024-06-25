import React from "react";
import graduation from "../../images/aboutme/graduate.svg";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <>
      <div id="aboutMe" className="bg-white">
        <div className=" w-full py-20 lg:p-28 lg:px-8 lg:flex lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl m-auto">
          <div className="w-3/4 m-auto lg:w-1/3 lg:h-2/3">
            <img className="w-full h-full" src={graduation} alt="" />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="w-3/4 m-auto text-center lg:w-1/2 mt-10 lg:mt-auto"
          >
            <h1 className="text-2xl md:text-4xl text-gray-800 mb-3">
              Hi, I’m Arham. Nice to meet you.
            </h1>
            <p className="text-xl text-gray-600">
              I hold a degree in Computer Science and have 1 years of experience
              in web development. Currently, I'm working as an Software
              Engineer, where I contribute to various projects using the MERN
              stack. and collaborated with talented people to create digital
              products for both business and consumer use. I'm quietly
              confident, naturally curious, and perpetually working on improving
              my chops.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
