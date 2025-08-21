'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Horizon = () => {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 sm:px-6 lg:px-8 mb-16">
      {/* Title */}
      <motion.h2 
        className="text-3xl sm:text-4xl font-medium text-[#3D3B7A]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Why Choose <motion.span 
          className=" font-semibold bg-gradient-to-r from-[#47099F] to-[#c38209] bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          AEC Horizon?
        </motion.span>
      </motion.h2>

      {/* Grid wrapper */}
      <div className="relative mt-15 grid grid-cols-1 md:grid-cols-2 gap-40 gap-y-20 word-wrap">
        {/* Card 1 */}
        <div className="rounded-3xl shadow-[0_10px_30px_rgba(28,33,66,0.08)] bg-[#ECEFFB]/60 backdrop-blur-sm border border-white/70 ">
          <div className="rounded-t-3xl px-7 pt-6 pb-3 border-b border-white/60 ">
            <h3 className="text-xl font-extrabold ">
              <span className="bg-gradient-to-r from-[#47099F] to-[#c38209] bg-clip-text text-transparent">
                Transparent Process
              </span>
            </h3>
          </div>
          <p className="px-7 py-6 text-[18px] leading-7 text-[#4B336D]">
            From consultation to delivery, every step mapped.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-3xl shadow-[0_10px_30px_rgba(28,33,66,0.08)] bg-[#ECEFFB]/60 backdrop-blur-sm border border-white/70">
          <div className="rounded-t-3xl px-7 pt-6 pb-3 border-b border-white/60">
            <h3 className="text-xl font-extrabold">
              <span className="bg-gradient-to-r from-[#47099F] to-[#c38209] bg-clip-text text-transparent">
                Innovation First
              </span>
            </h3>
          </div>
          <p className="px-7 py-6 text-[18px] leading-7 text-[#322E5F]">
            Automation, Revit families, custom strategies.
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-3xl shadow-[0_10px_30px_rgba(28,33,66,0.08)] bg-[#ECEFFB]/60 backdrop-blur-sm border border-white/70">
          <div className="rounded-t-3xl px-7 pt-6 pb-3 border-b border-white/60">
            <h3 className="text-xl font-extrabold">
              <span className="bg-gradient-to-r from-[#47099F] to-[#c38209] bg-clip-text text-transparent">
                End to End Coverage
              </span>
            </h3>
          </div>
          <p className="px-7 py-6 text-[18px] leading-7 text-[#322E5F]">
            BIM, Business Development, digital strategy—all under one roof.
          </p>
        </div>

        {/* Card 4 */}
        <div className="rounded-3xl shadow-[0_10px_30px_rgba(28,33,66,0.08)] bg-[#ECEFFB]/60 backdrop-blur-sm border border-white/70">
          <div className="rounded-t-3xl px-7 pt-6 pb-3 border-b border-white/60">
            <h3 className="text-xl font-extrabold">
              <span className="bg-gradient-to-r from-[#6D53D2] to-[#D08A49] bg-clip-text text-transparent">
                Real People. Real Results.
              </span>
            </h3>
          </div>
          <p className="px-7 py-6 text-[18px] leading-7 text-[#322E5F]">
            No fluff. Just expert-driven solutions.
          </p>
        </div>

        {/* Center plus sign */}
        <div className="absolute top-45 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 z-10">
          {/* Shadow element with same shape but slightly larger and positioned behind */}
          <div 
            className="absolute w-full h-full bg-[rgba(28,33,66,0.08)]"
            style={{
              clipPath: "polygon(38% 0%, 62% 0%, 62% 38%, 100% 38%, 100% 62%, 62% 62%, 62% 100%, 38% 100%, 38% 62%, 0% 62%, 0% 38%, 38% 38%)",
              transform: "translate(5px, 10px) scale(1.02)",
              filter: "blur(10px)",
              zIndex: -1
            }}
          ></div>
          {/* Main plus shape */}
          <div 
            className="w-full h-full bg-[#ECEFFB] flex items-center justify-center"
            style={{
              clipPath: "polygon(38% 0%, 62% 0%, 62% 38%, 100% 38%, 100% 62%, 62% 62%, 62% 100%, 38% 100%, 38% 62%, 0% 62%, 0% 38%, 38% 38%)"
            }}
          ></div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <button
          className="px-6 py-3 rounded-full text-white font-medium shadow-[0_10px_30px_rgba(80,44,211,0.35)] bg-gradient-to-r from-[#C56B2F] via-[#B35ACB] to-[#4E22B7] hover:opacity-95 transition"
        >
          View our services
        </button>
      </div>
    </section>
  );
};

export default Horizon;
