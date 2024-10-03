"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Component() {
  const containerRef = useRef < HTMLDivElement > null;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className='min-h-screen flex flex-col md:flex-row'>
      {/* Left side: Image grid */}
      <div className='w-full md:w-1/2 grid grid-cols-2 gap-4 p-4'>
        <div className='aspect-square relative'>
          <Image
            src='/placeholder.svg?height=300&width=300'
            alt='Image 1'
            layout='fill'
            objectFit='cover'
            className='rounded-lg'
          />
        </div>
        <div className='aspect-square relative'>
          <Image
            src='/placeholder.svg?height=300&width=300'
            alt='Image 2'
            layout='fill'
            objectFit='cover'
            className='rounded-lg'
          />
        </div>
        <div className='aspect-square relative'>
          <Image
            src='/placeholder.svg?height=300&width=300'
            alt='Image 3'
            layout='fill'
            objectFit='cover'
            className='rounded-lg'
          />
        </div>
        <div className='aspect-square relative'>
          <Image
            src='/placeholder.svg?height=300&width=300'
            alt='Image 4'
            layout='fill'
            objectFit='cover'
            className='rounded-lg'
          />
        </div>
      </div>

      {/* Right side: Parallax text */}
      <div className='w-full md:w-1/2 relative'>
        <div className='sticky top-0 p-4 h-screen overflow-hidden'>
          <motion.div style={{ y }} className='space-y-4'>
            <motion.h2 className='text-4xl font-bold'>Parallax Title</motion.h2>
            <motion.p className='text-lg text-gray-600'>
              This is a small description that demonstrates the parallax effect.
              As you scroll, this text will move at a different rate compared to
              the images on the left, starting from the top of its container.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
