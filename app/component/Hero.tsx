"use client"
import React from 'react';
import { Globe } from '@/components/magicui/globe';
import InfinityLoops from './InfinityLoop';
const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 relative overflow-x-clip h-[1000px]">
      <h1 className="text-[60px] leading-none mb-6 font-instrument-sans tracking-normal relative z-10 bottom-[360]">
        <span className="text-[#4B336D] font-normal inline-block transition-all duration-300 hover:scale-105 hover:text-[#6772e5] cursor-pointer">Three Infinite Loops,</span>
        <br />
        <span className="bg-gradient-to-r from-[#4B336D] to-[#E1627F] text-transparent bg-clip-text font-semibold inline-block transition-all duration-300 hover:scale-105 hover:from-[#6772e5] hover:to-[#E1627F] cursor-pointer">One Global Impact.</span>
      </h1>
      <InfinityLoops />
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
            
            baseColor: [0.5,1,1],
            markerColor: [0.80, 0.85, 0.96],
            glowColor: [0.5,1,1],
            
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
      
      
    </section>
  );
};

export default Hero;