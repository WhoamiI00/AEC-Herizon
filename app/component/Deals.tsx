'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Deals = () => {
  return (
    <section className="w-full flex flex-col items-center pt-12 pb-20 bg-transparent h-[110vh] overflow-clip">
      {/* Header */}
      <div className="text-center mb-20">
        <motion.h2 
          className="text-[2.5rem] sm:text-4xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span 
            className="text-[#5E3CCB]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Process From 
          </motion.span>
          <motion.span 
            className="text-[#4A2FB2]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Drafts 
          </motion.span>
          <motion.span 
            className="text-[#C97932]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            To Deals
          </motion.span>
        </motion.h2>
        <motion.p 
          className="text-[#6B6F85] mt-2 text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We&apos;ve always got you covered
        </motion.p>
      </div>

      {/* Deals visualization with background and icons */}
      <div className="relative w-full max-w-4xl h-[500px] mb-10">
        {/* Background SVG */}
        <motion.div 
          className="absolute inset-0 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image src="/deals_background.svg" alt="Deals Background" className="w-full h-full object-contain" width={800} height={500} />
        </motion.div>
        
        {/* Icon 1 - Top Circle */}
        <motion.div 
          className="absolute top-[-5%] left-[50%] transform -translate-x-1/2 w-140 h-140"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.1 , rotate: 0, y: 0 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image src="/icon3.svg" alt="Icon 3" className="w-full h-full object-contain drop-shadow-lg" width={80} height={80} />
        </motion.div>
        
        {/* Icon 2 - Bottom Left Circle */}
        <motion.div 
          className="absolute bottom-[52%] left-[51%] transform translate-x-[-50%] translate-y-[50%] w-140 h-140 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.2, rotate: 0, y: 0 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image src="/icon2.svg" alt="Icon 2" className="w-full h-full object-contain drop-shadow-lg" width={80} height={80} />
        </motion.div>
        
        {/* Icon 3 - Bottom Right Circle */}
        <motion.div 
          className="absolute bottom-[52%] right-[51%] transform translate-x-[50%] translate-y-[50%] w-140 h-140"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.2, rotate: 0, y: 0 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image src="/icon1.svg" alt="Icon 1" className="w-full h-full object-contain drop-shadow-lg" width={80} height={80} />
        </motion.div>
      </div>
      
      {/* View Services Button with hover animation */}
      <button className="translate-y-3 mt-0 px-7 py-3 rounded-lg text-white text-base font-semibold shadow-lg bg-[#4A2FB2] hover:bg-[#5E3CCB] transition-all duration-300 hover:scale-105 hover:shadow-xl">
        View our services
      </button>
    </section>
  );
};

export default Deals;