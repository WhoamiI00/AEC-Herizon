'use client'

import React from 'react';

const Horizon = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Why Choose <span className="bg-gradient-to-r from-[#47099F] to-[#F8AD1D] text-transparent bg-clip-text">AEC Horizon</span>?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Top row */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-2">
              <span className="text-purple-800">Transparent</span> <span className="text-amber-600">Process</span>
            </h3>
            <p className="text-gray-700">
              From consultation to delivery, every step mapped.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-2">
              <span className="text-purple-800">Innovation</span> <span className="text-amber-600">First</span>
            </h3>
            <p className="text-gray-700">
              Automation, Revit families, custom strategies.
            </p>
          </div>
          
          {/* Bottom row */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-2">
              <span className="text-purple-800">End to End</span> <span className="text-amber-600">Coverage</span>
            </h3>
            <p className="text-gray-700">
              BIM, Business Development, digital strategy—all under one roof.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-2">
              <span className="text-purple-800">Real People. Real</span> <span className="text-amber-600">Results.</span>
            </h3>
            <p className="text-gray-700">
              No fluff. Just expert-driven solutions.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#services" className="inline-block px-8 py-3 bg-gradient-to-r from-[#47099F] to-[#F8AD1D] text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
            View our services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Horizon;