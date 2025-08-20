"use client"
import React from 'react';
import { Globe } from '@/components/magicui/globe';
import InfinityLoops from './InfinityLoop';
import { motion } from 'framer-motion';
import TripleInfinity from './TripleInfinity';
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
          className="bg-gradient-to-r from-[#4B336D] to-[#E1627F] text-transparent bg-clip-text font-semibold inline-block cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          One Global Impact.
        </motion.span>
      </motion.h1>
      
      <div className='z-100 scale'>
        
        <div className='absolute top-[-10rem] left-[54rem] scale-[2.2] z-0'><TripleInfinity/></div>
        {/* <div className='absolute top-[-250] left-145 scale-[2.5] z-0'><InfinityLoops /></div>
        <div className='absolute top-[-250] right-145 scale-[2.5] z-0'><InfinityLoops /></div> */}
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
        <div className='absolute top-[-100px] left-[320px] z-20 w-[100px] text-center'>
          <h3 className='text-[#4B336D] font-bold text-2xl mb-1'>Innovation</h3>
          <p className='text-[#6B7280] text-xs leading-tight'>Cutting-edge solutions</p>
        </div>
      </div>

      {/* Right Infinity Loop with Text */}
      <div className='relative z-20'>
        <div className='absolute top-[-100px] right-[340px] z-20 w-[100px] text-center'>
          <h3 className='text-[#4B336D] font-bold text-2xl mb-1'>Sustainability</h3>
          <p className='text-[#6B7280] text-xs leading-tight'>Eco-friendly practices</p>
        </div>
      </div>

      {/* Center Text Block (positioned above the globe) */}
      <div className='absolute top-[450px] left-1/2 transform -translate-x-1/2 z-20 w-[120px] text-center'>
        <h3 className='text-[#4B336D] font-bold text-2xl mb-1'>Global Reach</h3>
        <p className='text-[#6B7280] text-xs leading-tight'>Worldwide connectivity</p>
      </div>
      
    </section>
  );
};

export default Hero;