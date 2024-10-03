"use client";

import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const phrases = ["Hello, World!", "Animation is Fun!", "Framer Motion Rocks!"];

export default function AnimatedTextScramble() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const controls = useAnimationControls();

  const scrambleText = async () => {
    await controls.start({
      opacity: 0,
      transition: { duration: 0.5 },
    });

    setCurrentPhrase((prev) => (prev + 1) % phrases.length);

    await controls.start({
      opacity: 1,
      transition: { duration: 0.5 },
    });
  };

  useEffect(() => {
    const interval = setInterval(scrambleText, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600'>
      <motion.h1
        className='text-4xl font-bold text-white'
        animate={controls}
        initial={{ opacity: 1 }}
      >
        {phrases[currentPhrase].split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
