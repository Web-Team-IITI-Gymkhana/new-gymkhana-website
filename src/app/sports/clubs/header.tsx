import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

export default function Header({ item }: { item: string }) {
  return (
    <h1
      className={`text-white text-6xl font-bold`}
    >
      <motion.span
        className={`text-[#3B82F6]`}
        initial={{ color: "#FFFFFF", scale: 1.1 }}
        animate={{ color: "#3B82F6", scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="flex flex-col bg-opacity-0 h-2/3 xl:px-48 xl:py-40 px-10 py-24 xxs:ml-40 sm:ml-0 ">
          <span className="xxs:pl-24 sm:pl-0 ">
            <p className="lg:inline text-4xl sm:text-7xl 2xl:text-8xl min-[1800px]:text-9xl font-extrabold text-Gold ">
              Sports 
            </p>
            <p className="lg:inline text-4xl sm:text-7xl 2xl:text-8xl min-[1800px]:text-9xl lg:ml-6 font-extrabold text-white">
              Clubs
            </p>
          </span>
          <br></br>
          <p className="text-3xl sm:text-6xl font-bold text-white xxs:pl-24 sm:pl-0">IIT Indore</p>
        </div>
      </motion.span>
    </h1>
  );
}
