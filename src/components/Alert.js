import React from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

function Alert() {
  const alert = useSelector((state) => state.alert);

  const variants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  return (
    <>
      <AnimatePresence>
        {alert.visible && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ type: "spring", stiffness: 800, damping: 30 }}
            className={`z-10 fixed right-10 md:right-20 top-20 ${
              alert.type === "success" ? "bg-green-600" : "bg-red-600"
            } text-white shadow-lg rounded-lg`}
          >
            <h1 className="px-10 py-6 text-xl font-thin">{alert.message}</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Alert;
