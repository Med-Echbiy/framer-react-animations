"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedCardFlip() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-pink-500'>
      <motion.div
        className='w-64 h-96 cursor-pointer'
        onClick={handleFlip}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ perspective: "1000px" }}
      >
        <motion.div
          className='w-full h-full rounded-xl shadow-lg bg-white flex items-center justify-center'
          style={{ backfaceVisibility: "hidden" }}
        >
          <h2 className='text-3xl font-bold text-purple-600'>Front</h2>
        </motion.div>
        <motion.div
          className='w-full h-full rounded-xl shadow-lg bg-pink-400 flex items-center justify-center absolute top-0 left-0'
          style={{ backfaceVisibility: "hidden", rotateY: 180 }}
        >
          <h2 className='text-3xl font-bold text-white'>Back</h2>
        </motion.div>
      </motion.div>
    </div>
  );
}
