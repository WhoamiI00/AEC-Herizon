'use client';

import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: {
      delayChildren: 0.15 + delay,
      staggerChildren: 0.12,
    },
  }),
};

// Remove fadeInUpScale variant

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "circOut" },
  },
};

const Horizon = () => {
  return (
    <motion.section
      className="relative mx-auto w-full max-w-6xl px-6 sm:px-6 lg:px-8 -translate-y-10"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }} // fire when ~25% in view, only once
      custom={0}
    >
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl font-medium text-[#3D3B7A]"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: "circOut" }}
        viewport={{ once: true }}
      >
        Why Choose{' '}
        <motion.span
          className=" font-semibold bg-gradient-to-r from-[#47099F] to-[#c38209] bg-clip-text text-transparent inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          AEC Horizon?
        </motion.span>
      </motion.h2>

      {/* Grid wrapper */}
      <motion.div
        className="relative mt-15 grid grid-cols-1 md:grid-cols-2 gap-40 gap-y-20 word-wrap"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        custom={0.1}
      >
        {/* Card 1 */}
        <motion.div
          className="rounded-3xl shadow-[0_10px_30px_rgba(28,33,66,0.08)] bg-[#ECEFFB]/60 backdrop-blur-sm border border-white/70 "
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
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
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="rounded-3xl shadow-[0_10px_30px_rgba(28,33,66,0.08)] bg-[#ECEFFB]/60 backdrop-blur-sm border border-white/70"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
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
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="rounded-3xl shadow-[0_10px_30px_rgba(28,33,66,0.08)] bg-[#ECEFFB]/60 backdrop-blur-sm border border-white/70"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
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
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="rounded-3xl shadow-[0_10px_30px_rgba(28,33,66,0.08)] bg-[#ECEFFB]/60 backdrop-blur-sm border border-white/70"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
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
        </motion.div>

        {/* Center plus sign */}
        <motion.div
          className="absolute top-45 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="absolute w-full h-full bg-[rgba(28,33,66,0.08)]"
            style={{
              clipPath:
                'polygon(38% 0%, 62% 0%, 62% 38%, 100% 38%, 100% 62%, 62% 62%, 62% 100%, 38% 100%, 38% 62%, 0% 62%, 0% 38%, 38% 38%)',
              transform: 'translate(5px, 10px) scale(1.02)',
              filter: 'blur(10px)',
              zIndex: -1,
            }}
          />
          <div
            className="w-full h-full bg-[#ECEFFB] flex items-center justify-center"
            style={{
              clipPath:
                'polygon(38% 0%, 62% 0%, 62% 38%, 100% 38%, 100% 62%, 62% 62%, 62% 100%, 38% 100%, 38% 62%, 0% 62%, 0% 38%, 38% 38%)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-10 flex justify-center"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: "circOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.button
          className="px-6 py-3 rounded-full text-white font-medium shadow-[0_10px_30px_rgba(80,44,211,0.35)] bg-gradient-to-r from-[#C56B2F] via-[#B35ACB] to-[#4E22B7] hover:opacity-95 transition"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 250, damping: 18 }}
        >
          View our services
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Horizon;
