'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
          We've always got you covered
        </motion.p>
      </div>

      {/* Top badge and description - removed since now part of circle */}

      {/* Triangle layout with animated connections */}
      <div className="relative w-[600px] h-[390px] mx-auto mb-4">
        {/* Animated liquid connectors */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 500 390"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBE4B7" />
              <stop offset="100%" stopColor="#F4D03F" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E6D9FF" />
              <stop offset="100%" stopColor="#D4C5FF" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9D4FF" />
              <stop offset="100%" stopColor="#B8C7FF" />
            </linearGradient>

            {/* Filter for glow effect */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Left to Top - Animated Path */}
          <path
            d="M110,320 Q250,180 250,80"
            stroke="url(#gradient1)"
            strokeWidth="20"
            fill="none"
            filter="url(#glow)"
            opacity="0.8"
          >
            <animate
              attributeName="stroke-width"
              values="20;35;20"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.8;1;0.8"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>

          {/* Top to Right - Animated Path */}
          <path
            d="M250,80 Q250,180 390,320"
            stroke="url(#gradient2)"
            strokeWidth="20"
            fill="none"
            filter="url(#glow)"
            opacity="0.8"
          >
            <animate
              attributeName="stroke-width"
              values="20;35;20"
              dur="3.5s"
              repeatCount="indefinite"
              begin="1s"
            />
            <animate
              attributeName="opacity"
              values="0.8;1;0.8"
              dur="3.5s"
              repeatCount="indefinite"
              begin="1s"
            />
          </path>

          {/* Left to Right - Animated Path */}
          <path
            d="M110,320 Q250,390 390,320"
            stroke="url(#gradient3)"
            strokeWidth="20"
            fill="none"
            filter="url(#glow)"
            opacity="0.8"
          >
            <animate
              attributeName="stroke-width"
              values="20;35;20"
              dur="4s"
              repeatCount="indefinite"
              begin="2s"
            />
            <animate
              attributeName="opacity"
              values="0.8;1;0.8"
              dur="4s"
              repeatCount="indefinite"
              begin="2s"
            />
          </path>

          {/* Animated flowing dots for liquid effect */}
          <circle r="6" fill="#FBE4B7" opacity="0.7">
            <animateMotion dur="4s" repeatCount="indefinite">
              <mpath href="#path1" />
            </animateMotion>
            <animate attributeName="r" values="6;10;6" dur="4s" repeatCount="indefinite" />
          </circle>

          <circle r="6" fill="#E6D9FF" opacity="0.7">
            <animateMotion dur="4.5s" repeatCount="indefinite" begin="1.5s">
              <mpath href="#path2" />
            </animateMotion>
            <animate attributeName="r" values="6;10;6" dur="4.5s" repeatCount="indefinite" begin="1.5s" />
          </circle>

          <circle r="6" fill="#C9D4FF" opacity="0.7">
            <animateMotion dur="5s" repeatCount="indefinite" begin="2.5s">
              <mpath href="#path3" />
            </animateMotion>
            <animate attributeName="r" values="6;10;6" dur="5s" repeatCount="indefinite" begin="2.5s" />
          </circle>

          {/* Hidden paths for motion */}
          <path id="path1" d="M110,320 Q250,180 250,80" fill="none" opacity="0" />
          <path id="path2" d="M250,80 Q250,180 390,320" fill="none" opacity="0" />
          <path id="path3" d="M110,320 Q250,390 390,320" fill="none" opacity="0" />
        </svg>

        {/* Center triangle logo with pulse animation */}
        <div className="absolute left-1/2 top-[75%] -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center animate-pulse">
            <span className="text-[30px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5E3CCB] to-[#C97932]">A</span>
          </div>
        </div>

        {/* Top - Architecture with hover animation */}
        <div className="absolute left-1/2 -translate-x-1/2 top-2 z-10 flex flex-col items-center space-y-2 transition-transform hover:scale-110 duration-300">
          <div className="text-xs text-[#5E3CCB] max-w-[180px] text-center font-medium absolute translate-x-50 translate-y-12">
            BIM &amp; Drafting Services → For precise design documentation, 3D modeling, and construction-ready plans.
          </div>
          <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-[#f6f7ff] shadow text-[#4A2FB2] font-bold text-base transition-all duration-300 hover:bg-[#eff1ff] translate-x-50">
            <span className="bg-white rounded-full px-3 py-1 font-semibold text-[#5E3CCB] shadow mr-2">A: Architecture</span>
            <span className="bg-white rounded-full w-7 h-7 flex justify-center items-center font-bold text-[#5E3CCB] shadow">1</span>
          </div>

          <div className="relative">
            <div className="w-32 h-32 absolute top-[-90] right-[-65] rounded-full bg-[#E9ECFD] shadow-lg flex items-center justify-center border-4 border-white transition-all duration-300 hover:shadow-xl">
              <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-[#E9ECFD] hover:to-white">
                {/* Architecture icon */}
                <svg width="36" height="36" viewBox="0 0 24 24" className="text-[#5E3CCB] transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3 6 6 1-4.5 4.2L18 21l-6-3.2L6 21l1.5-7.8L3 9l6-1 3-6z" />
                </svg>
              </div>
            </div>
            {/* Animated ring */}
            {/* <div className="absolute inset-0 w-32 h-32 rounded-full border-2 border-[#5E3CCB] opacity-20">
              <div className="w-full h-full rounded-full animate-ping border border-[#5E3CCB] opacity-30"></div>
            </div> */}
          </div>

          {/* Badge and description - moved closer to circle */}

        </div>


        {/* Bottom Left - Engineering with hover animation */}
        <div className="absolute left-2 bottom-[-100] z-10 flex flex-col items-center space-y-2 transition-transform hover:scale-110 duration-300">
          <div className="w-32 h-32 rounded-full bg-[#FBE4B7] shadow-lg flex items-center justify-center border-4 border-white transition-all duration-300 hover:shadow-xl">
            <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-[#FBE4B7] hover:to-white">
              {/* Megaphone / Engineering icon */}
              <svg width="36" height="36" viewBox="0 0 24 24" className="text-[#C97932] transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 10v4l8 4V6l-8 4zM14 7h7M14 12h7M14 17h7" />
              </svg>
            </div>
          </div>
          {/* Animated ring */}
          {/* <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-2 border-[#C97932] opacity-20">
            <div className="w-full h-full rounded-full animate-ping border border-[#C97932] opacity-30" style={{animationDelay: '1s'}}></div>
          </div> */}

          {/* Badge and description */}
          <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-[#fff7ed] shadow text-[#C97932] font-bold text-base transition-all duration-300 hover:bg-[#fef3e2]">
            <span className="bg-white rounded-full px-3 py-1 font-semibold text-[#C97932] shadow mr-2">E: Engineering</span>
            <span className="bg-white rounded-full w-7 h-7 flex justify-center items-center font-bold text-[#C97932] shadow">2</span>
          </div>
          <div className="text-xs text-[#C97932] max-w-[150px] text-center font-medium">
            Technical Business Development → To secure projects, create proposals.
          </div>
        </div>

        {/* Bottom Right - Construction with hover animation */}
        <div className="absolute right-2 bottom-[-100] z-10 flex flex-col items-center space-y-2 transition-transform hover:scale-110 duration-300">
          <div className="w-32 h-32 rounded-full bg-[#E6D9FF] shadow-lg flex items-center justify-center border-4 border-white transition-all duration-300 hover:shadow-xl">
            <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-[#E6D9FF] hover:to-white">
              {/* Construction icon */}
              <svg width="36" height="36" viewBox="0 0 24 24" className="text-[#5E3CCB] transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
            </div>
          </div>
          {/* Animated ring */}
          {/* <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-2 border-[#5E3CCB] opacity-20">
            <div className="w-full h-full rounded-full animate-ping border border-[#5E3CCB] opacity-30" style={{animationDelay: '2s'}}></div>
          </div> */}

          {/* Badge and description */}
          <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-[#f6f7ff] shadow text-[#5E3CCB] font-bold text-base transition-all duration-300 hover:bg-[#eff1ff]">
            <span className="bg-white rounded-full px-3 py-1 font-semibold text-[#5E3CCB] shadow mr-2">C: Construction</span>
            <span className="bg-white rounded-full w-7 h-7 flex justify-center items-center font-bold text-[#5E3CCB] shadow">3</span>
          </div>
          <div className="text-xs text-[#5E3CCB] max-w-[170px] text-center font-medium">
            Needs: Branding &amp; Digital Marketing → To attract clients, showcase completed projects.
          </div>
        </div>
      </div>

      {/* View Services Button with hover animation */}
      <button className="translate-y-30 mt-9 px-7 py-3 rounded-lg text-white text-base font-semibold shadow-lg bg-[#4A2FB2] hover:bg-[#5E3CCB] transition-all duration-300 hover:scale-105 hover:shadow-xl">
        View our services
      </button>
    </section>
  );
};

export default Deals;