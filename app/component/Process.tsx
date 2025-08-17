'use client'

import React from 'react';

const Process = () => {
  return (
    <section className="py-16 px-4 relative bg-[#F2F4FF]">
      <div className="container mx-auto">
        <h2 className="text-[45px] font-instrument-sans font-bold leading-[100%] tracking-[0%] mb-12 text-center">
          <span className="text-[#47099F]">Our </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#47099F] to-[#F8AD1D]" style={{ backgroundImage: 'linear-gradient(90.13deg, #47099F 0.11%, #F8AD1D 125.29%)' }}>Process</span>
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16">
          We don&apos;t just deliver projects — we engineer clarity, collaboration, and measurable results at every phase.
        </p>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Left side image - process flow diagram */}
          <div className="hidden md:block absolute left-0 top-0 h-full w-1/3">
            <div className="relative h-full">
              <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#47099F] to-[#F8AD1D] opacity-20 rounded-full blur-3xl"></div>
              <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-8 border-[#47099F]/20"></div>
            </div>
          </div>
          
          {/* Process steps */}
          <div className="grid grid-cols-1 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-24 h-24 bg-white rounded-full flex items-center justify-center text-[45px] font-bold text-[#47099F] shadow-lg">
                1
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm flex-1">
                <h3 className="text-2xl font-semibold mb-2">
                  <span className="text-[#47099F]">We listen </span>
                  <span className="text-[#47099F]">first.</span>
                </h3>
                <p className="text-gray-700">
                  We dive deep into your goals, existing workflows, and challenges. This phase includes audits, stakeholder calls, and strategic alignment.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-24 h-24 bg-white rounded-full flex items-center justify-center text-[45px] font-bold text-[#47099F] shadow-lg">
                2
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm flex-1">
                <h3 className="text-2xl font-semibold mb-2">
                  <span className="text-[#47099F]">We build the </span>
                  <span className="text-[#47099F]">blueprint.</span>
                </h3>
                <p className="text-gray-700">
                  A custom project plan is created with timelines, milestones, and deliverables tailored to your objectives.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-24 h-24 bg-white rounded-full flex items-center justify-center text-[45px] font-bold text-[#47099F] shadow-lg">
                3
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm flex-1">
                <h3 className="text-2xl font-semibold mb-2">
                  <span className="text-[#47099F]">We bring your project to </span>
                  <span className="text-[#47099F]">life.</span>
                </h3>
                <p className="text-gray-700">
                  From BIM modeling to business development and marketing assets — this is where strategy turns into structure.
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-24 h-24 bg-white rounded-full flex items-center justify-center text-[45px] font-bold text-[#47099F] shadow-lg">
                4
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm flex-1">
                <h3 className="text-2xl font-semibold mb-2">
                  <span className="text-[#47099F]">Review & </span>
                  <span className="text-[#47099F]">Optimization</span>
                </h3>
                <p className="text-gray-700">
                  We refine every layer with your feedback, run QA checks, and optimize for future scalability.
                </p>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-24 h-24 bg-white rounded-full flex items-center justify-center text-[45px] font-bold text-[#47099F] shadow-lg">
                5
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm flex-1">
                <h3 className="text-2xl font-semibold mb-2">
                  <span className="text-[#47099F]">We&apos;re partners, not </span>
                  <span className="text-[#47099F]">vendors.</span>
                </h3>
                <p className="text-gray-700">
                  Post-launch or post-handover, we offer optional support packages, retainer plans, or strategy refreshers so your systems stay sharp as you grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;