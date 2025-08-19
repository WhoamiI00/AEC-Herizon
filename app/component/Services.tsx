"use client"

import type React from "react"
import { FaPencilRuler, FaThLarge, FaBullhorn } from "react-icons/fa"
import { motion } from "framer-motion"

const SectionCard = ({
  title,
  items,
  icon,
  gradient,
  index,
}: {
  title: string
  items: string[]
  icon: React.ReactNode
  gradient: string
  index: number
}) => {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-8 top-1/2 -translate-y-1/2 w-50 h-1 z-5">
        <div className="w-full h-full border-t-[4px] border-dashed border-white/90 shadow-sm"></div>
      </div>

      <div className="relative shrink-0 ml-24 translate-x-20 scale-200 z-10">
        <div className="h-36 w-36 rounded-full bg-white shadow-[0_16px_48px_rgba(0,0,0,0.2)] grid place-items-center relative z-20 border-8 border-white">
          <div
            className={`h-28 w-28 rounded-full grid place-items-center text-white text-4xl shadow-inner ${
              index === 0
                ? "bg-gradient-to-br from-blue-300 to-blue-400"
                : index === 1
                  ? "bg-gradient-to-br from-purple-400 to-purple-500"
                  : "bg-gradient-to-br from-yellow-300 to-orange-400"
            }`}
          >
            {icon}
          </div>
        </div>
      </div>

      <div
        className={`flex-1 rounded-3xl px-10 py-6 ml-[3rem] pl-16 shadow-[0_12px_32px_rgba(0,0,0,0.12)] ${gradient} backdrop-blur-sm relative`}
      >
        <h3 className="text-2xl font-semibold text-[#4B3F8C] mb-6 ml-15">{title}</h3>
        <ul className="space-y-1 ml-15">
          {items.map((item, i) => (
            <li key={i} className="flex items-center text-[#5C557A] text-base">
              <span className="w-2 h-2 bg-[#6F6BD9] rounded-full mr-4 shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Services = () => {
  return (
    <section className="relative scale-100 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold tracking-tight text-[#4B3F8C] mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Our{" "}
          <motion.span
            className="text-[#6F6BD9]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Services
          </motion.span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 z-10">
            <div className="w-full h-full border-l-[6px] border-dashed border-white/90 shadow-sm"></div>
          </div>

          <div className="space-y-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <SectionCard
                title="BIM Services"
                items={[
                  "BIM Modeling (LOD 100–500)",
                  "Revit Family & Template Creation",
                  "Clash Detection, Coordination",
                  "Scan-to-BIM & As-Built",
                  "Automation & MEPF modeling",
                ]}
                icon={<FaPencilRuler />}
                gradient="bg-gradient-to-r from-blue-100/80 to-blue-200/60"
                index={0}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SectionCard
                title="Business Development"
                items={[
                  "Go-to-Market for BIM startups",
                  "Proposal & Estimation",
                  "CRM Setup & Lead Gen",
                  "Brand Strategy",
                  "Strategic AEC Partnerships",
                ]}
                icon={<FaThLarge />}
                gradient="bg-gradient-to-r from-purple-100/80 to-purple-200/60"
                index={1}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <SectionCard
                title="Digital Marketing & Branding"
                items={[
                  "SEO for BIM & AEC",
                  "Social Media & Email Campaigns",
                  "BIM-based Content",
                  "Marketing Decks",
                  "Digital Positioning",
                ]}
                icon={<FaBullhorn />}
                gradient="bg-gradient-to-r from-yellow-100/80 to-orange-100/60"
                index={2}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
