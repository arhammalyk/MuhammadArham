import { Fragment, useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// animations
const navBarVarient = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

const navigation = [
  { name: "Home", to: "/" },
  // { name: "About", to: "about" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [navbarBg, setNavbarBg] = useState("bg-black");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("bg-white");
      } else {
        setNavbarBg("bg-black");
      }
      // if (window.scrollY > 30 && window.scrollY < 40) {
      //   setNavbarBg("bg-transparent");
      // }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Disclosure
      as="nav"
      className={`${navbarBg} transition-all duration-1000 w-full fixed top-0 z-40`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-24">
            <div className="relative flex h-[70px] items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <motion.div
                  variants={navBarVarient}
                  initial="hidden"
                  animate="visible"
                  className={`${
                    navbarBg === "bg-white" ? "text-black" : "text-white"
                  } flex flex-shrink-0 items-center text-xl`}
                >
                  Muhammad Arham
                </motion.div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          ` ${
                            navbarBg === "bg-black" ? "text-white" : ""
                          } hover:text-gray-400 transition-all duration-200 rounded-md px-3 py-2 text-sm font-medium`
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    {/* here */}
                    <button
                      onClick={() => {
                        handleClick("aboutMe");
                      }}
                      className={classNames(
                        ` ${
                          navbarBg === "bg-black" ? "text-white" : ""
                        } hover:text-gray-400 transition-all duration-200 rounded-md px-3 py-2 text-sm font-medium`
                      )}
                    >
                      About
                    </button>
                    {/* here */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className=" space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.to}
                  className={classNames(
                    item.current
                      ? " text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
