import React from "react";

import express from "../../images/sliderStacks/icons8-express-js.svg";
import webDevelopment from "../../images/sliderStacks/icons8-web-development.svg";
import react from "../../images/sliderStacks/icons8-react.svg";
import { motion } from "framer-motion";

function MyWork() {
  return (
    <>
      <div className=" bg-white w-full p-12 text-gray-800">
        <div className="text-center py-12">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl font-bold mb-6"
          >
            My Recent Work
          </motion.h1>
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-xl text-gray-600"
          >
            Here are a few past design projects I've worked on.
          </motion.h2>
        </div>
        <div className="m-auto flex flex-col gap-x-5 lg:flex-row gap-y-10 lg:max-w-5xl xl:max-w-screen-2xl">
          {/* card 1 */}
          <motion.div
            whileInView={{ scale: 1.1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="bg-gradient-to-tl from-black to-purple-400 relative w-11/12 lg:w-1/3 m-auto rounded-3xl overflow-hidden transition-all 
            duration-300 hover:bg-cover hover:bg-center"
            // style={{ backgroundImage: `url(${img})` }}
          >
            <img
              className="w-11/12 m-auto"
              src={react}
              alt="Design Project 1"
            />
            <div
              className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col 
            justify-center items-center opacity-0 transition-all duration-700 hover:opacity-100"
            >
              <h3 className="p-4 text-center text-xl text-white mb-4">
                'Arham Stack' Your hub for questions and answers.
              </h3>
              <a
                href="https://stack-overflow-green.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <button className="px-5 py-3 border border-white transition-all duration-300 text-white rounded-3xl bg-transparent hover:bg-purple-600">
                  Visit Website
                </button>
              </a>
            </div>
          </motion.div>
          {/* card 2 */}
          <motion.div
            whileInView={{ scale: 1.1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="relative w-11/12 lg:w-1/3 bg-gradient-to-br from-amber-400 to-black m-auto rounded-3xl overflow-hidden transition-all 
            duration-300 hover:bg-cover hover:bg-center"
            // style={{ backgroundImage: `url(${img2})` }}
          >
            <img
              className="w-11/12 m-auto"
              src={express}
              alt="Design Project 1"
            />
            <div
              className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col 
            justify-center items-center opacity-0 transition-all duration-700 hover:opacity-100"
            >
              <h3 className="p-4 text-center text-xl text-white mb-4">
                Building fully dynamic and responsive web applications.
              </h3>
              <a
                href="https://tech-traversers.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <button className="px-5 py-3 border border-white transition-all duration-300 text-white rounded-3xl bg-transparent hover:bg-amber-700">
                  Visit Website
                </button>
              </a>
            </div>
          </motion.div>
          {/* card 3 */}
          <motion.div
            whileInView={{ scale: 1.1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="relative w-11/12 lg:w-1/3 bg-gradient-to-br from-red-500 to-black   m-auto rounded-3xl overflow-hidden transition-all 
            duration-300 hover:bg-cover hover:bg-center"
            // style={{ backgroundImage: `url(${img3})` }}
          >
            <img
              className="w-11/12 m-auto"
              src={webDevelopment}
              alt="Design Project 1"
            />
            <div
              className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col 
            justify-center items-center opacity-0 transition-all duration-700 hover:opacity-100"
            >
              <h3 className="p-4 text-center text-xl text-white mb-4">
                Crafting beautiful and performant static websites.
              </h3>
              <a
                href="https://meshal-pk.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <button className="px-5 py-3 border border-white transition-all duration-300 text-white rounded-3xl bg-transparent hover:bg-red-700">
                  Visit Website
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default MyWork;
