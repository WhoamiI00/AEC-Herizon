'use client';

import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { FiUser, FiSettings } from 'react-icons/fi';
import { BsCone } from 'react-icons/bs';
import { TbTopologyStar3 } from 'react-icons/tb';
import { TbBuildingBridge } from "react-icons/tb";
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: easeOut },
  }),
};

const diagIn = (dx: number, dy: number) => ({
  hidden: { opacity: 0, x: dx, y: dy, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
});

const Serve = () => {
  return (
    <section className="relative overflow-hidden">
      {/* soft background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[25%] top-0 h-[120%] w-[120%] rotate-45 rounded-3xl bg-gradient-to-b from-[#E8ECFF] to-[#F6F8FF]" />
        <div className="absolute -right-[25%] bottom-0 h-[120%] w-[120%] -rotate-45 rounded-3xl bg-gradient-to-t from-[#E8ECFF] to-[#F6F8FF]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-10 sm:py-20 lg:py-24">
        {/* heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.h2 
            className="text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Who We <motion.span 
              className="bg-gradient-to-r from-[#6E76FF] to-[#B158FF] bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Serve
            </motion.span>
          </motion.h2>
          <p className="mt-3 text-slate-600">
            From startups to skyscrapers—our clients shape the built world.
          </p>
        </motion.div>

        {/* X layout */}
        <div className="relative mx-auto mt-25 grid h-[520px] w-full max-w-3xl place-items-center">
          {/* diagonal bars */}
          <motion.div
            variants={diagIn(-40, -40)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="pointer-events-none absolute h-[640px] w-[170px] -rotate-45 rounded-full bg-[#C9D0F2]/70"
          />
          <motion.div
            variants={diagIn(40, 40)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="pointer-events-none absolute h-[640px] w-[170px] rotate-45 rounded-full bg-[#BFC7F4]/70"
          />

          {/* center diamond */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rotate-45 relative z-10 grid place-items-center rounded-2xl bg-white px-8 py-10 shadow-[0_10px_24px_rgba(80,80,160,0.25)] h-40 w-40"
            style={{ transform: 'rotate(45deg)' }}
          >
            <div className="text-center rotate-[-45deg] scale-130">
              <p className="text-l font-medium tracking-wide text-[#A26EEA]">Who Do</p>
              <p className="text-l font-semibold text-slate-800 mt-[-2]">We Serve?</p>
            </div>
          </motion.div>

          {/* Top-left */}
          <Corner
            position="tl"
            icon={<Chip icon={<div className="relative"><FiUser size={26} className="opacity-90" /><FiSettings size={16} className="absolute -right-3 -top-2 opacity-90" /></div>} />}
            label="Architects & Engineers"
            variants={diagIn(-40, -40)}
            placeLabelOnTop={true} // NEW
          />
          {/* Top-right */}
          <Corner
            position="tr"
            icon={<Chip icon={<BsCone size={28} className="opacity-90" />} />}
            label="Construction Firms"
            variants={diagIn(40, -40)}
            placeLabelOnTop={true} // NEW
          />
          {/* Bottom-left */}
          <Corner
            position="bl"
            icon={<Chip icon={<TbTopologyStar3 size={28} className="opacity-90" />} />}
            label="BIM Startups & SaaS AEC Tech"
            variants={diagIn(-40, 40)}
          />
          {/* Bottom-right */}
          <Corner
            position="br"
            icon={<Chip icon={<TbBuildingBridge size={28} className="opacity-90" />} />}
            label="Urban planning & Smart Infra"
            variants={diagIn(40, 40)}
          />
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          custom={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-30 flex justify-center"
        >
          <button
            className="rounded-2xl bg-gradient-to-r from-[#C76F4E] via-[#A748B8] to-[#6E76FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(120,90,200,0.35)] hover:opacity-95"
            type="button"
          >
            Get Solutions For your Industry
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Serve;

/* helpers */
function Chip({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="grid h-16 w-16 place-items-center rounded-full bg-[#F4F6FF] text-[#8B5CF6]">
      {icon}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-3 rounded-full bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function Corner({
  position,
  icon,
  label,
  variants,
  placeLabelOnTop = false, // NEW
}: {
  position: 'tl' | 'tr' | 'bl' | 'br';
  icon: React.ReactNode;
  label: string;
  variants: any;
  placeLabelOnTop?: boolean;
}) {
  const positionClasses = {
    tl: 'left-0 -top-1 -translate-x-3 md:left-36 md:-top-[1.5rem]',
    tr: 'right-0 -top-1 translate-x-3 md:right-38 md:top-[-1.5rem]',
    bl: 'left-0 bottom-6 -translate-x-3 md:left-29 md:-bottom-[1.5rem]',
    br: 'right-0 bottom-6 translate-x-3 md:right-30 md:bottom-[-1.5rem]',
  } as const;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`absolute ${positionClasses[position]} flex ${
        placeLabelOnTop ? 'flex-col-reverse ' : 'flex-col'
      } items-center gap-2 scale-150`}
    >
      <div className="rounded-full bg-white p-4 shadow-[0_8px_18px_rgba(90,90,170,0.22)] ring-2 ring-white">
        {icon}
      </div>
      <Pill>{label}</Pill>
    </motion.div>
  );
}
