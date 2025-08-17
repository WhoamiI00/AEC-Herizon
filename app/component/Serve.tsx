'use client';

import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { FiUser, FiSettings } from 'react-icons/fi';
import { BsCone } from 'react-icons/bs';
import { TbTopologyStar3 } from 'react-icons/tb';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.6, ease: easeOut },
  }),
};

const diagIn = (dx: number, dy: number) => ({
  hidden: { opacity: 0, x: dx, y: dy, scale: 0.9 },
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
    <section
      id="serve"
      className="relative isolate overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #E8ECFF 0%, #EEF2FF 35%, #F2F4FF 65%, #E9EFFF 100%)',
      }}
    >
      {/* top soft beams */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[720px] w-[720px] -translate-x-1/2 rotate-45 bg-[linear-gradient(180deg,#BFC9FF33,transparent_60%)]" />
        <div className="absolute left-1/2 top-20 h-[720px] w-[720px] -translate-x-1/2 -rotate-45 bg-[linear-gradient(180deg,#C9D4FF33,transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-800 sm:text-4xl">
            Who We{' '}
            <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 bg-clip-text font-bold text-transparent">
              Serve
            </span>
          </h2>
          <p className="mt-3 text-slate-600 sm:text-lg">
            From startups to skyscrapers—our clients shape the built world.
          </p>
        </motion.div>

        {/* X layout wrapper */}
        <div className="relative mx-auto grid h-[520px] w-full max-w-3xl place-items-center">
          {/* center diamond */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 h-40 w-40 rotate-45 rounded-2xl border border-white/70 bg-white/95 shadow-[0_10px_20px_rgba(21,22,45,0.12)] ring-1 ring-purple-200/50 backdrop-blur"
          >
            <div className="-rotate-45 flex h-full w-full flex-col items-center justify-center">
              <div className="bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-center text-xl font-extrabold tracking-[-0.02em] text-transparent">
                Who Do
                <br />
                We Serve?
              </div>
            </div>
          </motion.div>

          {/* diagonal bars behind icons (X arms) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[120px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-2xl bg-[linear-gradient(180deg,#7C87C9_0%,#7F8EE0_100%)] opacity-70" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[120px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-2xl bg-[linear-gradient(180deg,#7C87C9_0%,#7F8EE0_100%)] opacity-70" />

          {/* icon circles */}
          {/* top-left */}
          <motion.div
            variants={diagIn(-60, -60)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute -top-2 left-6 -translate-y-1/2"
          >
            <div className="relative">
              <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-white shadow-[0_8px_18px_rgba(27,27,45,0.15)] ring-2 ring-transparent"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 30%, #ffffff 30%, #F7F8FF 100%)',
                  boxShadow:
                    '6px 10px 0 0 rgba(67,76,148,0.15), 0 10px 25px rgba(16,24,40,0.12)',
                  borderImage:
                    'linear-gradient(180deg,#9AA7FF,#B8C1FF) 1',
                  borderWidth: 2,
                  borderStyle: 'solid',
                }}
              >
                {/* Minimal A&E icon */}
                <div className="text-[34px] text-purple-700">
                  <span className="relative inline-flex">
                    <FiUser />
                    <FiSettings className="absolute -right-2 -top-2 text-[18px]" />
                  </span>
                </div>
              </div>

              {/* label */}
              <div className="mt-3 flex justify-center">
                <div className="rounded-full bg-white/90 px-5 py-2 text-sm font-medium text-slate-700 shadow-md ring-1 ring-slate-200">
                  Architects & Engineers
                </div>
              </div>
            </div>
          </motion.div>

          {/* top-right */}
          <motion.div
            variants={diagIn(60, -60)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute -top-2 right-6 -translate-y-1/2"
          >
            <div className="relative">
              <div
                className="grid h-24 w-24 place-items-center rounded-full bg-white"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 30%, #ffffff 30%, #F7F8FF 100%)',
                  boxShadow:
                    '6px 10px 0 0 rgba(67,76,148,0.15), 0 10px 25px rgba(16,24,40,0.12)',
                  borderImage:
                    'linear-gradient(180deg,#9AA7FF,#B8C1FF) 1',
                  borderWidth: 2,
                  borderStyle: 'solid',
                }}
              >
                <BsCone className="text-[34px] text-purple-700" />
              </div>
              <div className="mt-3 flex justify-center">
                <div className="rounded-full bg-white/90 px-5 py-2 text-sm font-medium text-slate-700 shadow-md ring-1 ring-slate-200">
                  Construction Firms
                </div>
              </div>
            </div>
          </motion.div>

          {/* bottom-left */}
          <motion.div
            variants={diagIn(-60, 60)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute bottom-0 left-6 translate-y-1/2"
          >
            <div className="relative">
              <div
                className="grid h-24 w-24 place-items-center rounded-full bg-white"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 30%, #ffffff 30%, #F7F8FF 100%)',
                  boxShadow:
                    '6px 10px 0 0 rgba(67,76,148,0.15), 0 10px 25px rgba(16,24,40,0.12)',
                  borderImage:
                    'linear-gradient(180deg,#9AA7FF,#B8C1FF) 1',
                  borderWidth: 2,
                  borderStyle: 'solid',
                }}
              >
                <TbTopologyStar3 className="text-[34px] text-purple-700" />
              </div>
              <div className="mt-3 flex justify-center">
                <div className="rounded-full bg-white/90 px-5 py-2 text-sm font-medium text-slate-700 shadow-md ring-1 ring-slate-200">
                  BIM Startups & SaaS AEC Tech
                </div>
              </div>
            </div>
          </motion.div>

          {/* bottom-right */}
          <motion.div
            variants={diagIn(60, 60)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute bottom-0 right-6 translate-y-1/2"
          >
            <div className="relative">
              <div
                className="grid h-24 w-24 place-items-center rounded-full bg-white"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 30%, #ffffff 30%, #F7F8FF 100%)',
                  boxShadow:
                    '6px 10px 0 0 rgba(67,76,148,0.15), 0 10px 25px rgba(16,24,40,0.12)',
                  borderImage:
                    'linear-gradient(180deg,#9AA7FF,#B8C1FF) 1',
                  borderWidth: 2,
                  borderStyle: 'solid',
                }}
              >
                <TbTopologyStar3 className="text-[34px] text-purple-700" />
              </div>
              <div className="mt-3 flex justify-center">
                <div className="rounded-full bg-white/90 px-5 py-2 text-sm font-medium text-slate-700 shadow-md ring-1 ring-slate-200">
                  Urban Planning & Smart Infra
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <button
            className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(139,92,246,0.35)] transition-all hover:translate-y-[-2px] hover:shadow-[0_16px_30px_rgba(139,92,246,0.45)]"
          >
            Get Solutions For Your Industry
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Serve;
