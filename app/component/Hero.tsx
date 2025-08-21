"use client"
import React from 'react';
import { Globe } from '@/components/magicui/globe';
import InfinityLoops from './InfinityLoop';
import { motion } from 'framer-motion';
import TripleInfinity from './TripleInfinity';
import Loader from './Loader';
const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 relative overflow-x-clip h-[1000px]">
      <motion.h1 
        className="text-[60px] leading-none mb-6 font-instrument-sans tracking-normal relative z-10 bottom-[360]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span 
          className="text-[#4B336D] font-normal inline-block cursor-pointer"
          whileHover={{ scale: 1.05, color: "#6772e5" }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          Three Infinite Loops,
        </motion.span>
        <br />
        <motion.span 
          className="bg-gradient-to-r from-[#47099F] to-[#d39014] bg-clip-text text-transparent font-semibold inline-block cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          One Global Impact.
        </motion.span>
      </motion.h1>
      
      <div className="absolute top-[-10rem] mx-auto ml-50 scale-[2.2] z-100 pointer-events-none">
  <TripleInfinity />
</div>

      <div className="absolute inset-0 z-0 scale-400 h-50 w-full overflow-clip my-70" 
           style={{
             maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.3) 90%, rgba(0,0,0,0) 100%)',
             WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.3) 90%, rgba(0,0,0,0) 100%)',
             opacity: 0.3
           }}>
        
        <Globe 
          className="mx-auto" 
          config={{
            width: 800,
            height: 800,
            devicePixelRatio: 2,
            phi: 0,
            theta: 0.3,
            dark: 0.1,
            diffuse: 0.4,
            mapSamples: 200000,
            mapBrightness: 1.2,
            onRender: () => {},
            
            baseColor: [0.71, 0.78, 0.95],
            markerColor: [0.80, 0.85, 0.96],
            glowColor: [0.71, 0.78, 0.95],
            
            markers: [
              { location: [14.5995, 120.9842], size: 0.03 },
              { location: [19.076, 72.8777], size: 0.1 },
              { location: [23.8103, 90.4125], size: 0.05 },
              { location: [30.0444, 31.2357], size: 0.07 },
              { location: [39.9042, 116.4074], size: 0.08 },
              { location: [-23.5505, -46.6333], size: 0.1 },
              { location: [19.4326, -99.1332], size: 0.1 },
              { location: [40.7128, -74.006], size: 0.1 },
              { location: [34.6937, 135.5022], size: 0.05 },
              { location: [41.0082, 28.9784], size: 0.06 },
            ],
          }}
        />
      </div>
      {/* Left Infinity Loop with Text */}
      <div className='relative z-20'>
        <div className='absolute top-[-6rem] left-[21rem] z-20 w-[10vw] text-center text-[#37116C]'>
          <h3 className='font-semibold text-2xl mb-1'>Digital Marketing & Branding</h3>
        </div>
      </div>

      {/* Right Infinity Loop with Text */}
      <div className='relative z-20'>
        <div className='absolute top-[-6rem] right-[21rem] z-20 w-[10vw] text-center text-[#37116C]'>
          <h3 className='font-semibold text-2xl mb-1'>BIM & Drafting Services</h3>
        </div>
      </div>

      {/* Center Text Block (positioned above the globe) */}
      <div className='relative z-20'>
      <div className='absolute top-[-6rem] left-1/2 transform -translate-x-1/2 z-20 w-[10vw] text-center text-[#37116C]'>
        <h3 className='font-semibold text-2xl mb-1'>Technical Business Development</h3>
      </div>
      </div>
      
    </section>
  );
};

export default Hero;