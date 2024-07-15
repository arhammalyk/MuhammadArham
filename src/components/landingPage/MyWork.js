import React, { useState } from "react";

import express from "../../images/sliderStacks/icons8-express-js.svg";
import webDevelopment from "../../images/sliderStacks/icons8-web-development.svg";
import react from "../../images/sliderStacks/icons8-react.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function MyWork() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation triggers only once
  });
  const animateOnceInView = {
    scale: 1.1,
    opacity: 1,
  };

  const initialAnimation = {
    scale: 1,
    opacity: 1,
  };
  const animationOptions = {
    duration: 1.5,
    delay: 0.5,
  };
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
        {/* Row 1  */}
        <div className="m-auto flex flex-col gap-x-5 lg:flex-row gap-y-10 lg:max-w-5xl xl:max-w-screen-2xl">
          {/* card 1 */}
          <motion.div
            ref={ref}
            initial={initialAnimation}
            animate={
              inView && !hasAnimated ? animateOnceInView : initialAnimation
            }
            transition={animationOptions}
            className="bg-gradient-to-tl from-black to-blue-300 relative w-11/12 lg:w-1/4 m-auto rounded-sm overflow-hidden transition-all 
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
                <button className="px-5 py-3 border border-white transition-all duration-300 text-white rounded-3xl bg-transparent hover:bg-black">
                  Visit Website
                </button>
              </a>
            </div>
          </motion.div>
          {/* card 2 */}
          <motion.div
            ref={ref}
            initial={initialAnimation}
            animate={
              inView && !hasAnimated ? animateOnceInView : initialAnimation
            }
            transition={animationOptions}
            className="relative w-11/12 lg:w-1/4 bg-gradient-to-br from-[#DDDDDD] to-black m-auto rounded-sm overflow-hidden transition-all 
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
                <button className="px-5 py-3 border border-white transition-all duration-300 text-white rounded-3xl bg-transparent hover:bg-black">
                  Visit Website
                </button>
              </a>
            </div>
          </motion.div>
          {/* card 3 */}
          <motion.div
            ref={ref}
            initial={initialAnimation}
            animate={
              inView && !hasAnimated ? animateOnceInView : initialAnimation
            }
            transition={animationOptions}
            className="relative w-11/12 lg:w-1/4 bg-gradient-to-br from-white to-black   m-auto rounded-sm overflow-hidden transition-all 
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
                <button className="px-5 py-3 border border-white transition-all duration-300 text-white rounded-3xl bg-transparent hover:bg-black">
                  Visit Website
                </button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="mt-12 m-auto flex flex-col gap-x-5 lg:flex-row gap-y-10 lg:max-w-5xl xl:max-w-screen-2xl">
          {/* card 1 */}
          <motion.div
            ref={ref}
            initial={initialAnimation}
            animate={
              inView && !hasAnimated ? animateOnceInView : initialAnimation
            }
            transition={animationOptions}
            className="bg-gradient-to-tl from-black to-[#7FDBFF] relative w-11/12 lg:w-1/4 m-auto rounded-sm overflow-hidden transition-all 
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
                A React.js project showcasing a faithful clone of a jazz
                website.
              </h3>
              <a
                href="https://jazz-clone.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <button className="px-5 py-3 border border-white transition-all duration-300 text-white rounded-3xl bg-transparent hover:bg-black">
                  Visit Website
                </button>
              </a>
            </div>
          </motion.div>
          {/* card 2 */}
          <motion.div
            ref={ref}
            initial={initialAnimation}
            animate={
              inView && !hasAnimated ? animateOnceInView : initialAnimation
            }
            transition={animationOptions}
            className="relative w-11/12 lg:w-1/4 bg-gradient-to-br from-[#DDDDDD] to-black m-auto rounded-sm overflow-hidden transition-all 
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
                <button className="px-5 py-3 border border-white transition-all duration-300 text-white rounded-3xl bg-transparent hover:bg-black">
                  Visit Website
                </button>
              </a>
            </div>
          </motion.div>
          {/* card 3 */}
          <motion.div
            ref={ref}
            initial={initialAnimation}
            animate={
              inView && !hasAnimated ? animateOnceInView : initialAnimation
            }
            transition={animationOptions}
            className="relative w-11/12 lg:w-1/4 bg-gradient-to-br from-white to-black   m-auto rounded-sm overflow-hidden transition-all 
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
              <h3 className="p-4 text-center text-lg text-white mb-4">
                Interactive game where users guess a number using HTML, CSS,
                JavaScript DOM manipulation.
              </h3>
              <a
                href="https://guess-a-number-delta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <button className="px-5 py-3 border border-white transition-all duration-300 text-white rounded-3xl bg-transparent hover:bg-black">
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
