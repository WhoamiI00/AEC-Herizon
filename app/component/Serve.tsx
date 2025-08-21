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
      <div className='absolute left-0'>
        <div className='relative'><svg width="908" height="1065" viewBox="0 0 808 965" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M663.749 262.674L278.394 965H-49L479.901 0H808L663.749 262.674Z" fill="url(#paint0_linear_1_229)" fillOpacity="0.08" />
          <defs>
            <linearGradient id="paint0_linear_1_229" x1="379.5" y1="0.0271189" x2="379.5" y2="965.027" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C7D0EA" />
              <stop offset="1" stopColor="#7F6DC0" />
            </linearGradient>
          </defs>
        </svg>
        </div>
      </div>
      <div className='absolute right-0'>
        <div className='relative'><svg width="897" height="1065" viewBox="0 0 797 965" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M143.931 262.674L529.823 965H857L328.233 0H0L143.958 262.674H143.931Z" fill="url(#paint0_linear_1_230)" fillOpacity="0.08" />
          <defs>
            <linearGradient id="paint0_linear_1_230" x1="0.433526" y1="481.714" x2="1364.06" y2="484.421" gradientUnits="userSpaceOnUse">
              <stop stopColor="#47099F" />
              <stop offset="1" stopColor="#F8AD1D" />
            </linearGradient>
          </defs>
        </svg>

        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-10 sm:py-20 lg:py-24">
        {/* heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-left"
        >
          <motion.h2
            className="text-3xl font-medium tracking-tight text-[#390a74] sm:text-4xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Who We <motion.span
              className="bg-gradient-to-r font-semibold from-[#3f1685] via-[#743db8] to-[#760272] bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Serve
            </motion.span>
          </motion.h2>
          <p className="mt-3 text-black text-xl">
            From startups to skyscrapers—our clients shape the built world.
          </p>
        </motion.div>

        {/* X layout */}
        <div className="relative mx-auto mt-25 grid h-[520px] w-full max-w-3xl place-items-center scale-[1.1] -translate-y-[-2rem]">
          {/* diagonal bars */}
          <motion.div
            variants={diagIn(-40, -40)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="pointer-events-none absolute h-[640px] w-[170px] -rotate-45 rounded-full  bg-gradient-to-r from-[#A0B0DA] to-[#6982C4] border-1 border-white"
          />
          <motion.div
            variants={diagIn(40, 40)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="pointer-events-none absolute h-[640px] w-[170px] rotate-45 rounded-full bg-gradient-to-r from-[#A0B0DA] to-[#7486B5] border-1 border-white"
          />

          {/* center diamond */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rotate-45 relative z-10 grid place-items-center rounded-2xl bg-white px-8 py-10 shadow-[0_10px_24px_rgba(80,80,160,0.25)] h-40 w-40 scale-[1.2]"
            style={{ transform: 'rotate(45deg)' }}
          >
            <div className='absolute'>
              <svg width="190" height="190" className='rotate-[-45deg]' viewBox="0 0 329 329" fill="none" xmlns="http://www.w3.org/2000/svg">

                <g filter="url(#filter0_d_1_238)">
                  <rect x="164.156" y="-10" width="240.981" height="240.981" rx="26" transform="rotate(44.9182 164.156 -10)" fill="white" />
                  <rect x="164.157" y="-9.29289" width="239.981" height="239.981" rx="25.5" transform="rotate(44.9182 164.157 -9.29289)" stroke="#E0E0E0" />
                </g>
                <defs>
                  <filter id="filter0_d_1_238" x="0.77002" y="0.769531" width="327.259" height="327.259" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_238" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_238" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="text-center rotate-[-45deg] scale-130">
              <p className="text-l font-semibold tracking-wide bg-gradient-to-r from-[#47099F] to-[#b97c0c] bg-clip-text text-transparent">Who Do</p>
              <p className="text-l font-semibold bg-gradient-to-r from-[#47099F] to-[#b97c0c] bg-clip-text text-transparent mt-[-2]">We Serve?</p>
            </div>
          </motion.div>

          {/* Top-left */}
          <Corner
            position="tl"
            icon={<div>
              <svg width="68" height="68" viewBox="0 0 221 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_241)">
                  <circle cx="110.941" cy="106.656" r="106" fill="white" />
                </g>
                <defs>
                  <filter id="filter0_d_1_241" x="0.941406" y="0.65625" width="220" height="220" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_241" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_241" result="shape" />
                  </filter>
                </defs>
              </svg>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 '>
                <svg width="50" height="50" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_1_245)">
                    <path d="M4.94385 98.875V85.6917C4.94385 83.1021 5.61086 80.6694 6.94489 78.3938C8.27892 76.1181 10.123 74.3917 12.4772 73.2146C16.4793 71.1743 20.9914 69.4479 26.0136 68.0354C31.0359 66.6229 36.5682 65.9167 42.6105 65.9167C48.6529 65.9167 54.1852 66.6229 59.2074 68.0354C64.2296 69.4479 68.7418 71.1743 72.7438 73.2146C75.098 74.3917 76.9421 76.1181 78.2761 78.3938C79.6102 80.6694 80.2772 83.1021 80.2772 85.6917V98.875H4.94385ZM14.3605 89.4583H70.8605V85.6917C70.8605 84.8285 70.6455 84.0438 70.2155 83.3375C69.7854 82.6313 69.2157 82.0819 68.5063 81.6896C65.6813 80.2771 62.0528 78.8646 57.6207 77.4521C53.1886 76.0396 48.1852 75.3333 42.6105 75.3333C37.0358 75.3333 32.034 76.0396 27.6051 77.4521C23.1761 78.8646 19.546 80.2771 16.7147 81.6896C16.0084 82.0819 15.4403 82.6313 15.0103 83.3375C14.5802 84.0438 14.3637 84.8285 14.3605 85.6917V89.4583ZM42.6105 61.2083C37.4313 61.2083 32.9977 59.3642 29.3095 55.676C25.6213 51.9878 23.7772 47.5542 23.7772 42.375H22.6001C21.8938 42.375 21.3257 42.16 20.8957 41.73C20.4657 41.2999 20.2491 40.7302 20.2459 40.0208C20.2428 39.3114 20.4594 38.7417 20.8957 38.3117C21.332 37.8817 21.9001 37.6667 22.6001 37.6667H23.7772C23.7772 34.1354 24.6404 30.9573 26.3668 28.1323C28.0932 25.3073 30.3688 23.0708 33.1938 21.4229V25.8958C33.1938 26.6021 33.4104 27.1718 33.8436 27.605C34.2768 28.0381 34.8449 28.2531 35.548 28.25C36.2511 28.2469 36.8208 28.0318 37.2571 27.605C37.6934 27.1781 37.9085 26.6084 37.9022 25.8958V19.5396C38.6084 19.3042 39.3539 19.1284 40.1386 19.0123C40.9234 18.8961 41.7473 18.8365 42.6105 18.8333C43.4737 18.8302 44.2977 18.8898 45.0824 19.0123C45.8671 19.1347 46.6126 19.3104 47.3188 19.5396V25.8958C47.3188 26.6021 47.5354 27.1718 47.9686 27.605C48.4018 28.0381 48.9699 28.2531 49.673 28.25C50.3761 28.2469 50.9458 28.0318 51.3821 27.605C51.8184 27.1781 52.0335 26.6084 52.0272 25.8958V21.4229C54.8522 23.0708 57.1279 25.3073 58.8543 28.1323C60.5807 30.9573 61.4438 34.1354 61.4438 37.6667H62.6209C63.3272 37.6667 63.8969 37.8832 64.3301 38.3164C64.7632 38.7496 64.9782 39.3177 64.9751 40.0208C64.972 40.7239 64.7569 41.2937 64.3301 41.73C63.9032 42.1663 63.3335 42.3813 62.6209 42.375H61.4438C61.4438 47.5542 59.5997 51.9878 55.9116 55.676C52.2234 59.3642 47.7897 61.2083 42.6105 61.2083ZM42.6105 51.7917C45.2001 51.7917 47.4177 50.8704 49.2634 49.0279C51.1091 47.1853 52.0303 44.9677 52.0272 42.375H33.1938C33.1938 44.9646 34.1167 47.1822 35.9623 49.0279C37.808 50.8735 40.0241 51.7948 42.6105 51.7917ZM77.923 70.625L77.2168 67.0938C76.7459 66.9368 76.2955 66.761 75.8655 66.5664C75.4354 66.3718 75.0227 66.0768 74.6272 65.6813L71.3313 66.8583L68.9772 62.6208L71.5668 60.2667V57.4417L68.9772 55.0875L71.3313 50.85L74.6272 52.0271C74.9411 51.7132 75.3334 51.4385 75.8043 51.2031C76.2751 50.9677 76.7459 50.7715 77.2168 50.6146L77.923 47.0833H82.6313L83.3376 50.6146C83.8084 50.7715 84.2793 50.9677 84.7501 51.2031C85.2209 51.4385 85.6133 51.7132 85.9272 52.0271L89.223 50.85L91.5772 55.0875L88.9876 57.4417V60.2667L91.5772 62.6208L89.223 66.8583L85.9272 65.6813C85.5348 66.0736 85.1236 66.3687 84.6936 66.5664C84.2636 66.7642 83.8116 66.9399 83.3376 67.0938L82.6313 70.625H77.923ZM80.2772 62.3854C81.2188 62.3854 82.0428 62.0323 82.7491 61.326C83.4553 60.6198 83.8084 59.7958 83.8084 58.8542C83.8084 57.9125 83.4553 57.0885 82.7491 56.3823C82.0428 55.676 81.2188 55.3229 80.2772 55.3229C79.3355 55.3229 78.5116 55.676 77.8053 56.3823C77.099 57.0885 76.7459 57.9125 76.7459 58.8542C76.7459 59.7958 77.099 60.6198 77.8053 61.326C78.5116 62.0323 79.3355 62.3854 80.2772 62.3854ZM88.7522 47.0833L87.8105 42.1396C87.1043 41.9042 86.4577 41.6107 85.8707 41.2591C85.2837 40.9076 84.7532 40.4948 84.2793 40.0208L79.3355 41.6688L76.0397 36.0188L80.0418 32.4875C79.8848 32.0951 79.8063 31.7812 79.8063 31.5458V29.6625C79.8063 29.4271 79.8848 29.1132 80.0418 28.7208L76.0397 25.1896L79.3355 19.5396L84.2793 21.1875C84.7501 20.7167 85.2806 20.3039 85.8707 19.9492C86.4608 19.5945 87.1074 19.301 87.8105 19.0688L88.7522 14.125H95.3438L96.2855 19.0688C96.9918 19.3042 97.6399 19.5992 98.2301 19.9539C98.8202 20.3086 99.3491 20.7198 99.8168 21.1875L104.761 19.5396L108.056 25.1896L104.054 28.7208C104.211 29.1132 104.29 29.4271 104.29 29.6625V31.5458C104.29 31.7812 104.211 32.0951 104.054 32.4875L108.056 36.0188L104.761 41.6688L99.8168 40.0208C99.3459 40.4917 98.817 40.9044 98.2301 41.2591C97.6431 41.6138 96.9949 41.9073 96.2855 42.1396L95.3438 47.0833H88.7522ZM92.048 36.4896C93.6959 36.4896 95.0896 35.9199 96.229 34.7805C97.3684 33.641 97.9366 32.2489 97.9334 30.6042C97.9303 28.9594 97.3606 27.5657 96.2243 26.4232C95.088 25.2806 93.6959 24.7125 92.048 24.7188C90.4001 24.725 89.0064 25.2947 87.867 26.4279C86.7276 27.561 86.1595 28.9531 86.1626 30.6042C86.1657 32.2552 86.7354 33.6489 87.8717 34.7852C89.008 35.9214 90.4001 36.4896 92.048 36.4896Z" fill="#8A486E" />
                  </g>
                  <defs>
                    <filter id="filter0_d_1_245" x="-4" y="0" width="121" height="121" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_245" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_245" result="shape" />
                    </filter>
                  </defs>
                </svg>

              </div>

            </div>}
            label="Architects & Engineers"
            variants={diagIn(-40, -40)}
            placeLabelOnTop={true} // NEW
          />
          {/* Top-right */}
          <Corner
            position="tr"
            icon={<div>
              <svg width="68" height="68" viewBox="0 0 221 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_241)">
                  <circle cx="110.941" cy="106.656" r="106" fill="white" />
                </g>
                <defs>
                  <filter id="filter0_d_1_241" x="0.941406" y="0.65625" width="220" height="220" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_241" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_241" result="shape" />
                  </filter>
                </defs>
              </svg>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 '>
                <svg width="48" height="48" viewBox="0 0 94 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M90.2002 80.2001H77.2402L52.0402 4.60007C50.6002 -0.439932 43.4002 -0.439932 41.9602 4.60007L16.7602 80.2001H3.8002C1.6402 80.2001 0.200195 81.6401 0.200195 83.8001V91.0001C0.200195 93.1601 1.6402 94.6001 3.8002 94.6001H90.2002C92.3602 94.6001 93.8002 93.1601 93.8002 91.0001V83.8001C93.8002 81.6401 92.3602 80.2001 90.2002 80.2001ZM43.4002 22.6001H50.6002L55.6402 37.0001H39.0802L43.4002 22.6001ZM34.0402 51.4001H59.9602L65.0002 65.8001H29.0002L34.0402 51.4001Z" fill="#8A486E" />
                </svg>


              </div>

            </div>}
            label="Construction Firms"
            variants={diagIn(40, -40)}
            placeLabelOnTop={true} // NEW
          />
          {/* Bottom-left */}
          <Corner
            position="bl"
            icon={<div>
              <svg width="68" height="68" viewBox="0 0 221 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_241)">
                  <circle cx="110.941" cy="106.656" r="106" fill="white" />
                </g>
                <defs>
                  <filter id="filter0_d_1_241" x="0.941406" y="0.65625" width="220" height="220" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_241" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_241" result="shape" />
                  </filter>
                </defs>
              </svg>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-15 '>
                <svg width="57" height="57" viewBox="0 0 116 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_1_250)">
                    <path d="M107.875 74.8125C109.843 74.8125 111.438 73.2175 111.438 71.25C111.438 69.2825 109.843 67.6875 107.875 67.6875C105.907 67.6875 104.312 69.2825 104.312 71.25C104.312 73.2175 105.907 74.8125 107.875 74.8125Z" fill="#8A486E" />
                    <path d="M8.125 74.8125C10.0925 74.8125 11.6875 73.2175 11.6875 71.25C11.6875 69.2825 10.0925 67.6875 8.125 67.6875C6.15749 67.6875 4.5625 69.2825 4.5625 71.25C4.5625 73.2175 6.15749 74.8125 8.125 74.8125Z" fill="#8A486E" />
                    <path d="M86.5001 92.6249C82.7507 92.62 79.0685 91.6289 75.8232 89.7511C72.5779 87.8733 69.8836 85.1749 68.0107 81.9268L61.8369 85.4893C66.7639 94.0036 75.9551 99.7499 86.5001 99.7499C97.0451 99.7499 106.236 94.0072 111.163 85.4893L104.989 81.9268C103.117 85.1749 100.422 87.8733 97.177 89.7511C93.9317 91.6289 90.2495 92.62 86.5001 92.6249Z" fill="#8A486E" />
                    <path d="M86.5001 49.875C90.2513 49.8817 93.9351 50.8721 97.1839 52.7475C100.433 54.6228 103.133 57.3175 105.014 60.5625L111.185 56.9964C106.101 48.2077 96.6426 42.75 86.5001 42.75C76.3577 42.75 66.8993 48.2077 61.7835 57.0534L48.0145 81.9375C44.2026 88.5281 37.1096 92.625 29.5001 92.625C21.8906 92.625 14.7977 88.5281 10.9858 81.9375L4.81201 85.5036C9.89926 94.2922 19.3577 99.75 29.5001 99.75C39.6426 99.75 49.101 94.2923 54.2168 85.4466L67.9858 60.5625C71.7977 53.9719 78.8906 49.875 86.5001 49.875Z" fill="#8A486E" />
                    <path d="M29.5001 49.875C33.2495 49.8799 36.9317 50.871 40.177 52.7488C43.4223 54.6266 46.1166 57.325 47.9895 60.5732L54.1633 57.0107C49.2364 48.4963 40.0451 42.75 29.5001 42.75C18.9551 42.75 9.76385 48.4963 4.83691 57.0107L11.0107 60.5732C12.8836 57.325 15.5779 54.6266 18.8232 52.7488C22.0685 50.871 25.7507 49.8799 29.5001 49.875ZM58.0001 21.375C62.6782 21.372 67.3109 22.2933 71.632 24.0858C75.953 25.8783 79.8775 28.5068 83.1798 31.8203L88.2101 26.79C80.4723 19.0451 69.7849 14.25 58.0001 14.25C46.2154 14.25 35.5278 19.0451 27.7865 26.7864L32.8204 31.8203C36.1227 28.5068 40.0471 25.8783 44.3682 24.0858C48.6893 22.2933 53.322 21.372 58.0001 21.375Z" fill="#8A486E" />
                  </g>
                  <defs>
                    <filter id="filter0_d_1_250" x="-3" y="0" width="122" height="122" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_250" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_250" result="shape" />
                    </filter>
                  </defs>
                </svg>


              </div>

            </div>}
            label="BIM Startups & SaaS AEC Tech"
            variants={diagIn(-40, 40)}
          />
          {/* Bottom-right */}
          <Corner
            position="br"
            icon={<div>
              <svg width="68" height="68" viewBox="0 0 221 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_241)">
                  <circle cx="110.941" cy="106.656" r="106" fill="white" />
                </g>
                <defs>
                  <filter id="filter0_d_1_241" x="0.941406" y="0.65625" width="220" height="220" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_241" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_241" result="shape" />
                  </filter>
                </defs>
              </svg>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-15 '>
                <svg width="65" height="65" viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_1_251)">
                    <path d="M33.75 28.125V106.875M101.25 28.125V106.875M11.25 84.375H123.75M16.875 45C23.3311 42.678 29.1235 38.8164 33.75 33.75C36.5263 40.4131 41.2127 46.1053 47.2188 50.1093C53.2248 54.1134 60.2816 56.25 67.5 56.25M67.5 56.25C74.7184 56.25 81.7752 54.1134 87.7812 50.1093C93.7873 46.1053 98.4737 40.4131 101.25 33.75C105.877 38.8164 111.669 42.678 118.125 45M67.5 56.25V84.375" stroke="#8A486E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <filter id="filter0_d_1_251" x="-4" y="0" width="143" height="143" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_251" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_251" result="shape" />
                    </filter>
                  </defs>
                </svg>



              </div>

            </div>}
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
          className="mt-50 flex justify-center scale-[1.1]"
        >
          <button
            className="rounded-2xl bg-gradient-to-r from-[#C76F4E] via-[#772b85] to-[#47099F] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(120,90,200,0.35)] hover:opacity-95"
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
    <span
      className="mt-3 rounded-[27.5px] bg-white/40 px-2 py-2 text-sm text-slate-700 
                 border border-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
    >
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
    tl: ' -translate-x-3 left-[9.7rem] -top-[1.6rem]',
    tr: ' translate-x-3 right-[10.3rem] top-[-1.6rem]',
    bl: ' -translate-x-3 left-[7.7rem] -bottom-[1.6rem]',
    br: ' translate-x-3 right-[8.3rem] bottom-[-1.6rem]',
  } as const;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`absolute ${positionClasses[position]} flex ${placeLabelOnTop ? 'flex-col-reverse ' : 'flex-col'
        } items-center gap-2 scale-150`}
    >
      <div className="rounded-full bg-white p-4 shadow-[0_8px_18px_rgba(90,90,170,0.22)] ring-2 ring-white">
        {icon}
      </div>
      <Pill>{label}</Pill>
    </motion.div>
  );
}
