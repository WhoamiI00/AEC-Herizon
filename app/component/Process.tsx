// app/component/Process.tsx
"use client";

import React from "react";
import { HiLightBulb } from "react-icons/hi";

const processSteps = [
  {
    id: 1,
    title: "We listen first.",
    description: "We dive deep into your goals, existing workflows, and challenges. This phase includes audits, stakeholder calls, and strategic alignment."
  },
  {
    id: 2,
    title: "We build the blueprint.",
    description: "A custom project plan is created with timelines, milestones, and deliverables tailored to your objectives."
  },
  {
    id: 3,
    title: "We bring your project to life.",
    description: "From BIM modeling to business development and marketing assets — this is where strategy turns into structure."
  },
  {
    id: 4,
    title: "Review & Optimization",
    description: "We refine every layer with your feedback, run QA checks, and optimize for future scalability."
  },
  {
    id: 5,
    title: "We're partners, not vendors.",
    description: "Post-launch or post-handover, we offer optional support packages, retainer plans, or strategy refreshers so your systems stay sharp as you grow."
  }
];

export default function Process() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#DCE2F3] to-[#E7ECFF]"></div>
      
      {/* Left side decorative circular pattern */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-120 h-120">
        {/* Main large circle with gradient */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-purple-100/30 to-orange-100/30 blur-3xl"></div>
        
        {/* Secondary circles */}
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-200/40 to-orange-200/40 blur-2xl"></div>
        <div className="absolute inset-16 rounded-full bg-gradient-to-br from-purple-300/50 to-orange-300/50 blur-xl"></div>
        
        {/* Central bulb icon area */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-purple-400/20 to-orange-400/20 flex items-center justify-center">
          <HiLightBulb className="w-12 h-12 text-orange-400" />
        </div>
        
        {/* Decorative elements around the circles */}
        <div className="absolute top-12 left-16 w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg rotate-12 opacity-80"></div>
        <div className="absolute bottom-16 left-8 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-70"></div>
        <div className="absolute top-24 right-8 w-4 h-12 bg-gradient-to-b from-red-400 to-orange-500 rounded-full rotate-45 opacity-75"></div>
        <div className="absolute bottom-24 right-12 w-10 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full -rotate-12 opacity-60"></div>
        
        {/* Curved decorative paths */}
        <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 320 320">
          {/* Main curved lines */}
          <path
            d="M80 100 Q160 60 240 100 Q160 140 80 100"
            stroke="#7C3AED"
            strokeWidth="3"
            fill="none"
            strokeDasharray="6,3"
            opacity="0.5"
          />
          <path
            d="M60 160 Q160 120 260 160"
            stroke="#F59E0B" 
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M80 220 Q160 180 240 220 Q160 260 80 220"
            stroke="#EC4899"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4,2"
            opacity="0.4"
          />
        </svg>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#9B5DE5] to-[#F59E0B] bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We don't just deliver projects — we engineer clarity, collaboration, and measurable results at every phase.
          </p>
        </div>

        {/* Process Steps - positioned to the right */}
        <div className="ml-auto max-w-4xl space-y-8">
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="flex items-start gap-6">
                {/* Number Circle - positioned on the left of each card */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center relative z-10">
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#9B5DE5] bg-clip-text text-transparent">
                      {step.id}
                    </span>
                  </div>
                  
                  {/* Dotted connector lines to left decorative area */}
                  {(step.id === 1 || step.id === 3 || step.id === 5) && (
                    <div className="absolute right-16 top-8 w-32 h-0.5 border-t-2 border-dotted border-purple-400 opacity-50"></div>
                  )}
                </div>
                
                {/* Content Card */}
                <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Vertical connector between steps */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-8 bg-gradient-to-b from-purple-300 to-transparent opacity-40"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
