'use client'

import React from 'react';

const Deals = () => {
  return (
    <section className="py-16 px-4 relative bg-[#F2F4FF]">
      <div className="container mx-auto">
        <h2 className="text-[45px] font-instrument-sans font-bold leading-[100%] tracking-[0%] mb-4 text-center">
          <span className="text-[#47099F]">Process From </span>
          <span className="bg-clip-text text-transparent" 
            style={{ backgroundImage: 'linear-gradient(90.13deg, #47099F 0.11%, #F8AD1D 125.29%)' }}>
            Drafts To Deals
          </span>
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16">
          We&apos;ve always got you covered
        </p>
        
        {/* Triangle diagram */}
        <div className="relative max-w-3xl mx-auto h-[500px]">
          {/* Center triangle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#E8EAFF] rounded-[30%] rotate-45"></div>
          
          {/* Architecture Circle - Top */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-72 h-72">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-[#E8EAFF] rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-[#D3D9FF] rounded-full flex flex-col items-center justify-center">
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white flex items-center justify-center shadow-md z-10 rounded-full">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#47099F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="#47099F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="#47099F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-semibold text-[#47099F]">A: Architecture</h3>
                  <div className="text-sm mt-1 text-gray-600 max-w-[200px] text-center">
                    <span className="inline-block">1</span>
                  </div>
                </div>
                <div className="text-xs mt-2 text-gray-600 max-w-[200px] text-center">
                  BIM & Drafting Services → For precise design documentation, 3D modeling, and construction-ready plans
                </div>
              </div>
            </div>
          </div>
          
          {/* Engineering Circle - Bottom Left */}
          <div className="absolute bottom-0 left-[15%] transform -translate-x-1/2 w-72 h-72">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-[#FFE8C4] rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-[#FFD699] rounded-full flex flex-col items-center justify-center">
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white flex items-center justify-center shadow-md z-10 rounded-full">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1v22M1 12h22M4 4l16 16M4 20L20 4" stroke="#47099F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-semibold text-[#47099F]">E: Engineering</h3>
                  <div className="text-sm mt-1 text-gray-600 max-w-[200px] text-center">
                    <span className="inline-block">2</span>
                  </div>
                </div>
                <div className="text-xs mt-2 text-gray-600 max-w-[200px] text-center">
                  Technical Business Development → To secure projects, create proposals.
                </div>
              </div>
            </div>
          </div>
          
          {/* Construction Circle - Bottom Right */}
          <div className="absolute bottom-0 right-[15%] transform translate-x-1/2 w-72 h-72">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-[#E8EAFF] rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-[#D3C2FF] rounded-full flex flex-col items-center justify-center">
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white flex items-center justify-center shadow-md z-10 rounded-full">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3h7v7H3V3zM14 3h7v7h-7V3zM14 14h7v7h-7v-7zM3 14h7v7H3v-7z" stroke="#47099F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-semibold text-[#47099F]">C: Construction</h3>
                  <div className="text-sm mt-1 text-gray-600 max-w-[200px] text-center">
                    <span className="inline-block">3</span>
                  </div>
                </div>
                <div className="text-xs mt-2 text-gray-600 max-w-[200px] text-center">
                  Needs: Branding & Digital Marketing → To attract clients, showcase completed projects.
                </div>
              </div>
            </div>
          </div>
          
          {/* Center Logo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white flex items-center justify-center shadow-md z-10 rounded-full">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#47099F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        {/* View Services Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#47099F] text-white rounded-md hover:bg-[#380880] transition-colors">
            View our services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Deals;