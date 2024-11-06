// src/components/Preloader.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TypingAnimation from "../components/ui/typing-animation";
const Preloader = ({ setLoading }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500); // Delay before hiding preloader
          return 100;
        }
        return prev + 10;
      });
    }, 200); // Adjust speed of the counter increment

    return () => clearInterval(interval);
  }, [setLoading]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-zinc-100 z-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center text-zinc-900 ">
          <TypingAnimation className="text-8xl font-['foxversion5bymickeyfan123daxvfx5']" text="Namaste" />
        </div>
        {/* Counter positioned at the bottom right */}
        <div className="absolute bottom-0 right-0 mb-4 mr-4 font-['FoundersGroteskSemibold'] text-zinc-900 text-9xl">
          {counter}%
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;