'use client'

import React from 'react';
import { FaPencilRuler, FaThLarge, FaBullhorn } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="py-16 px-4 relative" style={{ background: 'linear-gradient(to bottom, #D8DDED, #E1E8FF)' }}>
      <div className="container mx-auto">
        <h2 className="text-[45px] font-instrument-sans font-normal leading-[100%] tracking-[0%] mb-12 text-center">
          Our <span className="font-bold text-[#6C4CF4]">Services</span>
        </h2>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical dashed line */}
          <div className="absolute left-[80px] top-0 bottom-0 border-l-2 border-dashed border-gray-300 z-0"></div>
          
          {/* BIM Services */}
          <div className="flex mb-12 relative z-10">
            <div className="flex-shrink-0 w-[160px] flex justify-center">
              <div className="w-[100px] h-[100px] rounded-full bg-[#E3E8FF] flex items-center justify-center shadow-md">
                <FaPencilRuler className="text-[#6C4CF4] text-3xl" />
              </div>
            </div>
            <div className="flex-grow bg-[#E3E8FF] rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#4B336D]">BIM Services</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#6C4CF4] mr-2">•</span>
                  <span className="text-gray-700">BIM Modeling (LOD 100–500)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6C4CF4] mr-2">•</span>
                  <span className="text-gray-700">Revit Family & Template Creation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6C4CF4] mr-2">•</span>
                  <span className="text-gray-700">Clash Detection, Coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6C4CF4] mr-2">•</span>
                  <span className="text-gray-700">Scan-to-BIM & As-Built</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6C4CF4] mr-2">•</span>
                  <span className="text-gray-700">Automation & MEPF modeling</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Business Development */}
          <div className="flex mb-12 relative z-10">
            <div className="flex-shrink-0 w-[160px] flex justify-center">
              <div className="w-[100px] h-[100px] rounded-full bg-[#E8D9FF] flex items-center justify-center shadow-md">
                <FaThLarge className="text-[#6C4CF4] text-3xl" />
              </div>
            </div>
            <div className="flex-grow bg-[#E8D9FF] rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#4B336D]">Business Development</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#6C4CF4] mr-2">•</span>
                  <span className="text-gray-700">Go-to-Market for BIM startups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6C4CF4] mr-2">•</span>
                  <span className="text-gray-700">Proposal & Estimation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6C4CF4] mr-2">•</span>
                  <span className="text-gray-700">CRM Setup & Lead Gen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6C4CF4] mr-2">•</span>
                  <span className="text-gray-700">Brand Strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6C4CF4] mr-2">•</span>
                  <span className="text-gray-700">Strategic AEC Partnerships</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Digital Marketing & Branding */}
          <div className="flex relative z-10">
            <div className="flex-shrink-0 w-[160px] flex justify-center">
              <div className="w-[100px] h-[100px] rounded-full bg-[#FFE5B8] flex items-center justify-center shadow-md">
                <FaBullhorn className="text-[#6C4CF4] text-3xl" />
              </div>
            </div>
            <div className="flex-grow bg-[#FFE5B8] rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#4B336D]">Digital Marketing & Branding</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#6C4CF4] mr-2">•</span>
                  <span className="text-gray-700">SEO for BIM & AEC</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6C4CF4] mr-2">•</span>
                  <span className="text-gray-700">Social Media & Email Campaigns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6C4CF4] mr-2">•</span>
                  <span className="text-gray-700">BIM-based Content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6C4CF4] mr-2">•</span>
                  <span className="text-gray-700">Marketing Decks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6C4CF4] mr-2">•</span>
                  <span className="text-gray-700">Digital Positioning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;