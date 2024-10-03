//@ts-check
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    rotation: Math.random() * 360,
    scale: Math.random() * 0.5 + 0.5,
  }));
};

export default function ParticleExplosionButton() {
  const [isExploded, setIsExploded] = useState(false);
  const particles = generateParticles(20);

  const handleClick = () => {
    setIsExploded(true);
    setTimeout(() => setIsExploded(false), 1000);
  };

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-green-500'>
      <motion.button
        className='px-6 py-3 bg-white text-blue-600 rounded-full font-bold text-lg shadow-lg relative overflow-hidden'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
      >
        Click Me!
        {isExploded &&
          particles.map((particle, index) => (
            <motion.div
              key={index}
              className='absolute w-2 h-2 bg-yellow-400 rounded-full'
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{
                x: particle.x,
                y: particle.y,
                opacity: 0,
                rotate: particle.rotation,
                scale: particle.scale,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          ))}
      </motion.button>
    </div>
  );
}
