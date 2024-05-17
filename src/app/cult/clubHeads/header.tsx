import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

export default function Header({item} : {item:string}){
    return (<h1 className={`text-white text-6xl font-bold border-b-2 border-solid border-[#3B82F6] py-3 `}>
              <motion.span className={`text-[#3B82F6]`} initial={{color: "#FFFFFF",scale:1.1}} animate={{color: "#3B82F6",scale:1}} transition={{delay:0.6, duration: 1 }}>Cultural</motion.span>Clubs
            </h1>
    )
}