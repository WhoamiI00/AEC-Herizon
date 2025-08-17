'use client';

import React from 'react';
import { FaPencilRuler, FaThLarge, FaBullhorn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SectionCard = ({
  title,
  items,
  icon,
  gradient,
  index,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
  gradient: string; // tailwind bg gradient classes
  index: number; // for spacing on the timeline
}) => {
  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Timeline dot */}
      <div className="relative shrink-0">
        {/*
        <div className="scale-200 h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-white shadow-[0_6px_18px_rgba(0,0,0,0.12)] grid place-items-center ring-1 ring-white/60">
          <div className="h-5 w-5 sm:h-7 sm:w-7 rounded-full bg-[#E9ECFF] grid place-items-center text-[#6F6BD9]">
            
            <span className="text-[12px] sm:text-sm opacity-80">{icon}</span>
          </div>
        </div>
        */}
        {/* timeline dashed line segment below, hidden after last card */}
        <div
          className={`absolute left-1/2 top-12 sm:top-16 -translate-x-1/2 w-px ${
            index < 2 ? 'h-[120px] sm:h-[150px]' : 'h-0'
          } border-l border-dashed border-[#C9D0EE]`}
        />
      </div>

      {/* Card */}
      <div
        className={`flex-1 rounded-2xl sm:rounded-[20px] px-5 sm:px-7 py-5 sm:py-6 shadow-[0_10px_24px_rgba(22,27,72,0.10)] ${gradient}`}
      >
        <div className="flex items-start gap-4">
          {/* Left circular badge */}
          <div className="hidden sm:grid place-items-center rounded-full bg-white/80 backdrop-blur h-14 w-14 shadow-[0_6px_18px_rgba(0,0,0,0.10)] ring-1 ring-white/60">
            <div className="h-11 w-11 rounded-full grid place-items-center text-[#6F6BD9] bg-white">
              <span className="text-xl">{icon}</span>
            </div>
          </div>

          {/* Text block */}
          <div className="min-w-0">
            <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#4B3F8C] tracking-[-0.01em]">
              {title}
            </h3>
            <ul className="mt-2.5 sm:mt-3 space-y-1.5 sm:space-y-2">
              {items.map((t, i) => (
                <li
                  key={i}
                  className="text-[13.5px] sm:text-[14px] text-[#5C557A]"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      {/* Background vertical dashed timeline */}
      <div className="absolute left-6 sm:left-8 top-0 bottom-0 border-l border-dashed border-[#C9D0EE] pointer-events-none" />

      {/* Heading */}
      <motion.h2 
        className="text-[28px] sm:text-[34px] md:text-[38px] font-semibold tracking-[-0.02em] text-[#4B3F8C]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Our <motion.span 
          className="text-[#6F6BD9]"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Services
        </motion.span>
      </motion.h2>

      <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-7">
        <SectionCard
          title="BIM Services"
          items={[
            'BIM Modeling (LOD 100–500)',
            'Revit Family & Template Creation',
            'Clash Detection, Coordination',
            'Scan-to-BIM & As-Built',
            'Automation & MEPF modeling',
          ]}
          icon={<FaPencilRuler />}
          gradient="bg-gradient-to-r from-[#E5ECFF] to-[#CFE1FF]"
          index={0}
        />

        <SectionCard
          title="Business Development"
          items={[
            'Go-to-Market for BIM startups',
            'Proposal & Estimation',
            'CRM Setup & Lead Gen',
            'Brand Strategy',
            'Strategic AEC Partnerships',
          ]}
          icon={<FaThLarge />}
          gradient="bg-gradient-to-r from-[#E9DEFF] to-[#D2C7FF]"
          index={1}
        />

        <SectionCard
          title="Digital Marketing & Branding"
          items={[
            'SEO for BIM & AEC',
            'Social Media & Email Campaigns',
            'BIM-based Content',
            'Marketing Decks',
            'Digital Positioning',
          ]}
          icon={<FaBullhorn />}
          gradient="bg-gradient-to-r from-[#FFE9C9] to-[#FFD68E]"
          index={2}
        />
      </div>
    </section>
  );
};

export default Services;
