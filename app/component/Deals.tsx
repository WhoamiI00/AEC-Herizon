'use client';

import React from 'react';

const Deals = () => {
  return (
    <section className="w-full flex flex-col items-center pt-12 pb-20 bg-transparent">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-[2.5rem] sm:text-4xl font-extrabold tracking-tight">
          <span className="text-[#5E3CCB]">Process From </span>
          <span className="text-[#4A2FB2]">Drafts </span>
          <span className="text-[#C97932]">To Deals</span>
        </h2>
        <p className="text-[#6B6F85] mt-2 text-base">We've always got you covered</p>
      </div>

      {/* Top badge and description */}
      <div className="max-w-xl w-full mx-auto mb-2">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f6f7ff] shadow text-[#4A2FB2] font-bold text-base mb-2">
          <span className="bg-white rounded-full px-3 py-1 font-semibold text-[#5E3CCB] shadow mr-2">A: Architecture</span>
          <span className="bg-white rounded-full w-7 h-7 flex justify-center items-center font-bold text-[#5E3CCB] shadow">1</span>
        </div>
        <div className="text-sm text-[#C97932] mb-2 font-medium">
          BIM &amp; Drafting Services → For precise design documentation, 3D modeling, and construction-ready plans.
        </div>
      </div>

      {/* Triangle layout */}
      <div className="relative w-[500px] h-[390px] mx-auto mb-4">
        {/* Soft triangle connectors */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 500 390"
          preserveAspectRatio="none"
        >
          {/* Left to Top */}
          <path d="M110,320 Q250,180 250,80" stroke="#FBE4B7" strokeWidth="32" fill="none" />
          {/* Top to Right */}
          <path d="M250,80 Q250,180 390,320" stroke="#E6D9FF" strokeWidth="32" fill="none" />
          {/* Left to Right */}
          <path d="M110,320 Q250,390 390,320" stroke="#C9D4FF" strokeWidth="32" fill="none" />
        </svg>

        {/* Center triangle logo */}
        <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-lg">
            <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5E3CCB] to-[#C97932]">A</span>
          </div>
        </div>

        {/* Top - Architecture */}
        <div className="absolute left-1/2 -translate-x-1/2 top-2 z-10 flex flex-col items-center space-y-2">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-[#E9ECFD] shadow-lg flex items-center justify-center border-4 border-white">
              <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center">
                {/* Architecture icon */}
                <svg width="36" height="36" viewBox="0 0 24 24" className="text-[#5E3CCB]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6 6 1-4.5 4.2L18 21l-6-3.2L6 21l1.5-7.8L3 9l6-1 3-6z"/></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Left - Engineering */}
        <div className="absolute left-2 bottom-2 z-10 flex flex-col items-center space-y-2">
          <div className="w-32 h-32 rounded-full bg-[#FBE4B7] shadow-lg flex items-center justify-center border-4 border-white">
            <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center">
              {/* Megaphone / Engineering icon */}
              <svg width="36" height="36" viewBox="0 0 24 24" className="text-[#C97932]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 10v4l8 4V6l-8 4zM14 7h7M14 12h7M14 17h7" />
              </svg>
            </div>
          </div>
          {/* Badge and description */}
          <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-[#fff7ed] shadow text-[#C97932] font-bold text-base">
            <span className="bg-white rounded-full px-3 py-1 font-semibold text-[#C97932] shadow mr-2">E: Engineering</span>
            <span className="bg-white rounded-full w-7 h-7 flex justify-center items-center font-bold text-[#C97932] shadow">2</span>
          </div>
          <div className="text-xs text-[#C97932] max-w-[150px] text-center font-medium">
            Technical Business Development → To secure projects, create proposals.
          </div>
        </div>

        {/* Bottom Right - Construction */}
        <div className="absolute right-2 bottom-2 z-10 flex flex-col items-center space-y-2">
          <div className="w-32 h-32 rounded-full bg-[#E6D9FF] shadow-lg flex items-center justify-center border-4 border-white">
            <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center">
              {/* Construction icon */}
              <svg width="36" height="36" viewBox="0 0 24 24" className="text-[#5E3CCB]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1.5"/>
                <rect x="14" y="3" width="7" height="7" rx="1.5"/>
                <rect x="3" y="14" width="7" height="7" rx="1.5"/>
                <rect x="14" y="14" width="7" height="7" rx="1.5"/>
              </svg>
            </div>
          </div>
          {/* Badge and description */}
          <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-[#f6f7ff] shadow text-[#5E3CCB] font-bold text-base">
            <span className="bg-white rounded-full px-3 py-1 font-semibold text-[#5E3CCB] shadow mr-2">C: Construction</span>
            <span className="bg-white rounded-full w-7 h-7 flex justify-center items-center font-bold text-[#5E3CCB] shadow">3</span>
          </div>
          <div className="text-xs text-[#5E3CCB] max-w-[170px] text-center font-medium">
            Needs: Branding &amp; Digital Marketing → To attract clients, showcase completed projects.
          </div>
        </div>
      </div>

      {/* View Services Button */}
      <button className="mt-9 px-7 py-3 rounded-lg text-white text-base font-semibold shadow-lg bg-[#4A2FB2] hover:bg-[#5E3CCB] transition-colors">
        View our services
      </button>
    </section>
  );
};

export default Deals;
