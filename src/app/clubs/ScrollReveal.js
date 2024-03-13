import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const ScrollReveal = ({ children }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust the scroll position value as needed
      if (scrollPosition > 200) {
        controls.start({ opacity: 1, x: 0 });
      } else {
        controls.start({ opacity: 0, x: '-100vw' });
      }
    };

    // Add event listener to track scroll position
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // Ensure the controls dependency is added to the dependency array
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, x: '-100vw' }}
      animate={controls}
      transition={{
      type: "spring",
      stiffness: 100,
      damping: 9,
      duration: 0.6,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
