import React from "react";

function InfoCards() {
  return (
    <>
      <div className="bg-white">
        <div className="w-full bg-white p-8 md:p-14 mx-auto md:max-w-4xl lg:max-w-6xl xl:max-w-screen-2xl lg:flex lg:space-x-5">
          {/* EDUCATION CARD */}
          <div
            className="lg:w-1/2 bg-white text-gray-600 w-10/12 mx-auto rounded-sm shadow-xl p-6 md:p-9  md:mb-7 lg:mb-0
        "
          >
            <div className="w-10/12 mx-auto">
              <div className="my-5">
                <h1 className="text-2xl text-gray-800 font-semibold">EDUCATION</h1>
                <div className="-space-y-3 mt-8">
                  <p className="ml-20 font-semibold text-gray-800">
                    University of Central Punjab
                  </p>
                  <p className="text-sm ">2019-2023</p>
                  <p className="ml-20 ">Bachelors in Computer Science</p>
                </div>
              </div>
              <hr className="ml-12 w-full h-0.5 bg-gray-300" />

              <div className="-space-y-3 my-5">
                <p className="ml-20 font-semibold text-gray-800">
                  Punjab College of Information Technology
                </p>
                <p className="text-sm text-gray-600">2017-2018</p>
                <p className="ml-20 text-gray-600">
                  INTERMEDIATE IN Computer Science
                </p>
              </div>
            </div>
          </div>
          {/* SKILLS CARD */}
          <div
            className="lg:w-1/2 bg-white text-gray-600 w-10/12 mx-auto rounded-sm shadow-xl p-9 
        "
          >
            <div className="w-10/12 mx-auto">
              <div className="my-5 text-center">
                <h1 className="text-gray-800 text-2xl font-semibold mb-4">
                  MERN stack developer
                </h1>
                <div className="space-y-10">
                  <div>
                    <p>
                      I like to code things from scratch, and enjoy bringing
                      ideas to life in the browser.
                    </p>
                  </div>
                  <div>
                    <p className="text-purple-700 text-xl font-semibold">
                      Languages I speak:
                    </p>
                    <p>HTML, CSS, JavaScript, C++, Python, Git</p>
                  </div>
                  <div>
                    <h1 className="text-purple-700 text-xl font-semibold">
                      Dev Tools:
                    </h1>

                    <p>React.js</p>
                    <p>MERN Stack</p>
                    <p>Tailwind CSS</p>
                    <p>Github</p>
                    <p>Bootstrap</p>
                  </div>
                </div>
              </div>
              <hr className="ml-12 w-full h-0.5 bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoCards;
