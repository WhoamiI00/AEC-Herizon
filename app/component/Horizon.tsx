'use client'

import React from 'react';

const Horizon = () => {
  return (
    <section className="py-16 px-4 relative" style={{ background: 'transparent' }}>
      <div className="container mx-auto">
        <h2 className="text-[45px] font-instrument-sans font-bold leading-[100%] tracking-[0%] mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#47099F] to-[#F8AD1D]" style={{ backgroundImage: 'linear-gradient(90.13deg, #47099F 0.11%, #F8AD1D 125.29%)' }}>Why Choose AEC Horizon?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative">
          {/* Top row */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-2">
              <span className="text-[#47099F]">Transparent</span> <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90.13deg, #47099F 0.11%, #F8AD1D 125.29%)' }}>Process</span>
            </h3>
            <p className="text-gray-700">
              From consultation to delivery, every step mapped.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-2">
              <span className="text-[#47099F]">Innovation</span> <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90.13deg, #47099F 0.11%, #F8AD1D 125.29%)' }}>First</span>
            </h3>
            <p className="text-gray-700">
              Automation, Revit families, custom strategies.
            </p>
          </div>
          
          {/* Bottom row */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-2">
              <span className="text-[#47099F]">End to End</span> <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90.13deg, #47099F 0.11%, #F8AD1D 125.29%)' }}>Coverage</span>
            </h3>
            <p className="text-gray-700">
              BIM, Business Development, digital strategy—all under one roof.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-2">
              <span className="text-[#47099F]">Real People. Real</span> <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90.13deg, #47099F 0.11%, #F8AD1D 125.29%)' }}>Results.</span>
            </h3>
            <p className="text-gray-700">
              No fluff. Just expert-driven solutions.
            </p>
          </div>
        </div>
        
        {/* Plus sign in the center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl font-bold text-[#47099F] shadow-md z-10">
          +
        </div>
        
        <div className="mt-12 text-center">
          <a href="#services" className="inline-block px-8 py-3 text-white font-medium rounded-lg hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(90.13deg, #47099F 0.11%, #F8AD1D 125.29%)' }}>
            View our services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Horizon;