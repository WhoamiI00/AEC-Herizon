// app/component/Process.tsx
"use client";

import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { motion } from "framer-motion";

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
      <div className="absolute inset-0 "></div>

      {/* Left side decorative circular pattern */}
      <div className="absolute left-[-23] top-1/2 -translate-y-[16rem] w-[28rem] h-[28rem] pointer-events-none scale-[0.9]">

        {/* Layer 1 (bottom) */}
        <div className="relative inset-0 z-100 -translate-y-[70px] ">
          <svg width="376" height="903" viewBox="0 0 376 903" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_263_fixed)">
              <circle cx="-75.5" cy="447.5" r="447.5" fill="white" fillOpacity="0.45" shapeRendering="crispEdges" />
            </g>
            <defs>
              <filter id="filter0_d_1_263_fixed" x="-527" y="0" width="903" height="903" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_263" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_263" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Layer 2 (middle) */}
        <div className="absolute inset-0 z-">
          <svg width="317" height="767" viewBox="0 0 317 767" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_264_mid)">
              <ellipse cx="-68" cy="371.5" rx="372" ry="371.5" fill="white" fillOpacity="0.36" shapeRendering="crispEdges" />
              <path d="M-68 1.5C136.623 1.5 302.5 167.157 302.5 371.5C302.5 575.843 136.623 741.5 -68 741.5C-272.623 741.5 -438.5 575.843 -438.5 371.5C-438.5 167.157 -272.623 1.5 -68 1.5Z" stroke="white" strokeWidth="3" shapeRendering="crispEdges" />
            </g>
            <defs>
              <filter id="filter0_d_1_264_mid" x="-448.9" y="0" width="765.8" height="766.9" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="2" dy="13" />
                <feGaussianBlur stdDeviation="5.45" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_264" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_264" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Layer 3 (top) */}
        <div className="absolute inset-0 z-[100] -translate-y-[48px]">
          <svg width="411" height="836" viewBox="0 0 411 836" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-148.369 424.363C-140.346 491.273 -96.5868 518.008 -77.6875 537.416C-58.76 556.881 -62.15 560.757 -63.4213 589.303C-63.6334 592.835 -63.1212 596.373 -61.916 599.699C-60.7109 603.025 -58.8385 606.069 -56.4141 608.643C-53.9897 611.216 -51.0648 613.266 -47.8195 614.664C-44.5742 616.063 -41.0773 616.781 -37.5443 616.775H37.5442C41.0749 616.769 44.5672 616.042 47.8082 614.64C51.0492 613.237 53.9709 611.188 56.3951 608.617C58.8192 606.047 60.6949 603.008 61.9078 599.688C63.1206 596.367 63.6452 592.834 63.4495 589.303C63.4495 561.295 60.8505 554.788 77.6875 537.416C99.1575 515.915 149.668 485.558 149.668 402.069C149.797 381.331 145.635 360.792 137.444 341.745C129.253 322.698 117.211 305.557 102.077 291.402C86.9431 277.247 69.045 266.386 49.5113 259.502C29.9776 252.619 9.23187 249.863 -11.4183 251.407C-32.0685 252.952 -52.1752 258.764 -70.4711 268.477C-88.7669 278.191 -104.855 291.594 -117.722 307.843C-130.588 324.093 -139.954 342.835 -145.229 362.889C-150.504 382.943 -151.573 403.874 -148.369 424.363Z" stroke="url(#paint0_linear_1_265)" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M43.5049 615.219V657.996C43.5049 669.68 37.0074 679.271 29.0126 679.271H-28.9846C-37.0359 679.271 -43.5051 669.652 -43.5051 657.996V615.219M22.0349 317.025C38.7155 317.032 54.7103 323.673 66.5026 335.488C78.295 347.303 84.9194 363.325 84.9194 380.03M-207.129 407.784H-258.94M-154.98 237.695L-191.733 200.887M-183.23 551.959L-219.983 588.738M-0.00011611 138.25V180.206M190.97 200.859L154.471 237.695M219.22 588.738L182.721 551.959M207.129 407.784H258.911" stroke="url(#paint1_linear_1_265)" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M208 8V6.5H206.849L206.551 7.61209L208 8ZM395 8C395 12.4183 398.582 16 403 16C407.418 16 411 12.4183 411 8C411 3.58172 407.418 0 403 0C398.582 0 395 3.58172 395 8ZM174 135L175.449 135.388L176.222 132.502L174.773 132.114L173.324 131.726L172.551 134.612L174 135ZM176.318 126.341L177.767 126.729L179.313 120.956L177.864 120.568L176.415 120.18L174.869 125.953L176.318 126.341ZM179.409 114.795L180.858 115.183L182.404 109.411L180.955 109.023L179.506 108.635L177.96 114.408L179.409 114.795ZM182.5 103.25L183.949 103.638L185.494 97.8652L184.045 97.4773L182.596 97.0894L181.051 102.862L182.5 103.25ZM185.591 91.7045L187.04 92.0925L188.585 86.3197L187.136 85.9318L185.687 85.5439L184.142 91.3166L185.591 91.7045ZM188.682 80.1591L190.131 80.547L191.676 74.7743L190.227 74.3864L188.778 73.9984L187.233 79.7712L188.682 80.1591ZM191.773 68.6136L193.222 69.0015L194.767 63.2288L193.318 62.8409L191.869 62.453L190.324 68.2257L191.773 68.6136ZM194.864 57.0682L196.313 57.4561L197.858 51.6834L196.409 51.2954L194.96 50.9075L193.415 56.6803L194.864 57.0682ZM197.955 45.5227L199.404 45.9106L200.949 40.1379L199.5 39.75L198.051 39.3621L196.506 45.1348L197.955 45.5227ZM201.045 33.9773L202.494 34.3652L204.04 28.5924L202.591 28.2045L201.142 27.8166L199.596 33.5893L201.045 33.9773ZM204.136 22.4318L205.585 22.8197L207.131 17.047L205.682 16.6591L204.233 16.2712L202.687 22.0439L204.136 22.4318ZM207.227 10.8863L208.676 11.2743L209.449 8.38791L208 8L206.551 7.61209L205.778 10.4984L207.227 10.8863ZM208 8V9.5H211.047V8V6.5H208V8ZM217.141 8V9.5H223.234V8V6.5H217.141V8ZM229.328 8V9.5H235.422V8V6.5H229.328V8ZM241.516 8V9.5H247.609V8V6.5H241.516V8ZM253.703 8V9.5H259.797V8V6.5H253.703V8ZM265.891 8V9.5H271.984V8V6.5H265.891V8ZM278.078 8V9.5H284.172V8V6.5H278.078V8ZM290.266 8V9.5H296.359V8V6.5H290.266V8ZM302.453 8V9.5H308.547V8V6.5H302.453V8ZM314.641 8V9.5H320.734V8V6.5H314.641V8ZM326.828 8V9.5H332.922V8V6.5H326.828V8ZM339.016 8V9.5H345.109V8V6.5H339.016V8ZM351.203 8V9.5H357.297V8V6.5H351.203V8ZM363.391 8V9.5H369.484V8V6.5H363.391V8ZM375.578 8V9.5H381.672V8V6.5H375.578V8ZM387.766 8V9.5H393.859V8V6.5H387.766V8ZM399.953 8V9.5H403V8V6.5H399.953V8Z" fill="#9E5A5F" />
            <path d="M208 828V829.5H206.849L206.551 828.388L208 828ZM395 828C395 823.582 398.582 820 403 820C407.418 820 411 823.582 411 828C411 832.418 407.418 836 403 836C398.582 836 395 832.418 395 828ZM174 701L175.449 700.612L176.222 703.498L174.773 703.886L173.324 704.274L172.551 701.388L174 701ZM176.318 709.659L177.767 709.271L179.313 715.044L177.864 715.432L176.415 715.82L174.869 710.047L176.318 709.659ZM179.409 721.205L180.858 720.817L182.404 726.589L180.955 726.977L179.506 727.365L177.96 721.592L179.409 721.205ZM182.5 732.75L183.949 732.362L185.494 738.135L184.045 738.523L182.596 738.911L181.051 733.138L182.5 732.75ZM185.591 744.295L187.04 743.908L188.585 749.68L187.136 750.068L185.687 750.456L184.142 744.683L185.591 744.295ZM188.682 755.841L190.131 755.453L191.676 761.226L190.227 761.614L188.778 762.002L187.233 756.229L188.682 755.841ZM191.773 767.386L193.222 766.998L194.767 772.771L193.318 773.159L191.869 773.547L190.324 767.774L191.773 767.386ZM194.864 778.932L196.313 778.544L197.858 784.317L196.409 784.705L194.96 785.092L193.415 779.32L194.864 778.932ZM197.955 790.477L199.404 790.089L200.949 795.862L199.5 796.25L198.051 796.638L196.506 790.865L197.955 790.477ZM201.045 802.023L202.494 801.635L204.04 807.408L202.591 807.795L201.142 808.183L199.596 802.411L201.045 802.023ZM204.136 813.568L205.585 813.18L207.131 818.953L205.682 819.341L204.233 819.729L202.687 813.956L204.136 813.568ZM207.227 825.114L208.676 824.726L209.449 827.612L208 828L206.551 828.388L205.778 825.502L207.227 825.114ZM208 828V826.5H211.047V828V829.5H208V828ZM217.141 828V826.5H223.234V828V829.5H217.141V828ZM229.328 828V826.5H235.422V828V829.5H229.328V828ZM241.516 828V826.5H247.609V828V829.5H241.516V828ZM253.703 828V826.5H259.797V828V829.5H253.703V828ZM265.891 828V826.5H271.984V828V829.5H265.891V828ZM278.078 828V826.5H284.172V828V829.5H278.078V828ZM290.266 828V826.5H296.359V828V829.5H290.266V828ZM302.453 828V826.5H308.547V828V829.5H302.453V828ZM314.641 828V826.5H320.734V828V829.5H314.641V828ZM326.828 828V826.5H332.922V828V829.5H326.828V828ZM339.016 828V826.5H345.109V828V829.5H339.016V828ZM351.203 828V826.5H357.297V828V829.5H351.203V828ZM363.391 828V826.5H369.484V828V829.5H363.391V828ZM375.578 828V826.5H381.672V828V829.5H375.578V828ZM387.766 828V826.5H393.859V828V829.5H387.766V828ZM399.953 828V826.5H403V828V829.5H399.953V828Z" fill="#9E5A5F" />
            <path d="M305.5 419H405" stroke="#9B595D" strokeWidth="3" strokeDasharray="6 6" />
            <defs>
              <linearGradient id="paint0_linear_1_265" x1="-0.251373" y1="250.99" x2="-0.251373" y2="616.775" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F8AD1D" />
                <stop offset="1" stopColor="#47099F" />
              </linearGradient>
              <linearGradient id="paint1_linear_1_265" x1="-0.0142517" y1="138.25" x2="-0.0142517" y2="679.271" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F8AD1D" />
                <stop offset="1" stopColor="#47099F" />
              </linearGradient>
            </defs>
          </svg>

        </div>

      </div>


      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl font-medium mb-6 text-[#390a74]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Our{" "}
            <motion.span
              className="bg-gradient-to-r font-bold from-[#3f1685] via-[#743db8] to-[#760272] bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Process
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-black text-lg max-w-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            We don&apos;t just deliver projects — we engineer clarity, collaboration, and measurable results at every phase.
          </motion.p>
        </div>

        {/* Process Steps - positioned to the right */}
        <div className="ml-auto max-w-4xl space-y-8 mx-20">
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="w-[70vw] h-[20vh] bg-white/50 border border-white shadow-md rounded-[28px] flex overflow-hidden"
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2, // Stagger effect
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Left rectangle with ID */}
                <div className="w-[8vw] h-full bg-white rounded-l-[28px] flex items-center justify-center">
                  <span className="text-[40px] font-semibold leading-[35px] bg-gradient-to-r from-[#47099F] to-[#F8AD1D] bg-clip-text text-transparent">
                    {step.id}
                  </span>
                </div>

                {/* Right content */}
                <div className="flex flex-col justify-center px-6 flex-1">
                  <div className="text-2xl font-bold text-black">{step.title}</div>
                  <div className="text-xl text-gray-700">{step.description}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
