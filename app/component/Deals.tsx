'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Deals = () => {
  return (
    <section className="relative w-full flex flex-col items-center pt-12 pb-20 bg-transparent h-[160vh] overflow-clip">
      {/* Header */}
      <div className="text-center mb-55">
        <motion.h2
          className="text-[2.5rem] sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#47099F] to-[#F8AD1D] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span
            className="bg-gradient-to-r from-[#47099F] to-[#b97c0c] bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Process From Drafts To Deals
          </motion.span>
          
        </motion.h2>
        <motion.p
          className="mt-2 text-2xl bg-gradient-to-r from-[#2b0263] to-[#500361] bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We&apos;ve always got you covered
        </motion.p>
      </div>

      {/* Deals visualization with background and icons */}
      <div className="relative w-full max-w-4xl h-[61vh] mb-30">
        {/* Background SVG */}
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image src="/deals_background.svg" alt="Deals Background" className="w-full h-full object-contain" width={800} height={500} />
        </motion.div>

        {/* Icon 1 - Top Circle */}
        <motion.div
          className="absolute top-[8.5%] left-[41.5%] transform scale-[0.75] "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.1, rotate: 0, y: 0 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg width="128" height="127" viewBox="0 0 128 127" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_316)">
              <path d="M75.9241 16.1343C77.8588 15.3465 79.9672 15.1092 82.0239 15.4477C84.0807 15.7862 86.0086 16.6879 87.6016 18.0564L88.326 18.7303L115.487 46.4126C116.962 47.9144 118.009 49.7966 118.515 51.8579C119.022 53.9192 118.969 56.082 118.362 58.1149L118.034 59.0525L104.437 93.7024C103.674 95.6421 102.416 97.3386 100.793 98.6162C99.1707 99.8938 97.2425 100.706 95.2084 100.969L66.006 104.69C65.2547 104.78 64.4689 104.889 63.6486 105.018L61.0958 105.44L59.7619 105.686L55.6049 106.506L52.7588 107.127L48.4753 108.106L42.9844 109.442L34.061 111.763L30.3467 112.782C29.4094 113.045 28.4224 113.064 27.4761 112.837C26.5299 112.609 25.6547 112.144 24.9309 111.483C24.207 110.821 23.6576 109.985 23.3331 109.051C23.0086 108.117 22.9193 107.115 23.0735 106.137L23.269 105.282L24.9651 98.7654L26.483 92.6241L27.7939 87.0279L28.7541 82.6622L29.3578 79.7557L30.1685 75.5248L30.6285 72.8468L30.9965 70.3388L34.7912 39.3983C35.0302 37.4888 35.7271 35.6688 36.8201 34.0989C37.9131 32.5291 39.3688 31.2578 41.0583 30.3974L41.9265 29.9931L75.9241 16.1343ZM80.1903 27.0162L46.1985 40.875L42.8407 68.2526L42.5647 70.5732C42.0004 74.884 41.2619 79.1693 40.3511 83.4182L39.3679 88.0241L58.2727 68.7566C57.6173 66.2645 57.7871 63.6217 58.7557 61.238C59.7243 58.8543 61.4376 56.8629 63.6298 55.5728C65.8221 54.2827 68.3708 53.7659 70.8806 54.1026C73.3904 54.4393 75.7211 55.6107 77.5111 57.4351C79.3011 59.2594 80.4505 61.6348 80.7808 64.1928C81.1112 66.7508 80.6041 69.3483 79.3383 71.5827C78.0725 73.817 76.1186 75.5632 73.7798 76.5503C71.4409 77.5375 68.8479 77.7105 66.4027 77.0426L47.4979 96.31L49.7518 95.8002L54.2595 94.8333C57.0687 94.2487 59.8928 93.7407 62.7287 93.3098L93.7595 89.3484L107.357 54.7045L80.1903 27.0162ZM93.7767 7.71359C94.766 6.70378 96.0829 6.0966 97.4802 6.00598C98.8775 5.91535 100.259 6.3475 101.366 7.22136L101.907 7.71359L126.297 32.5715C127.339 33.6236 127.947 35.0418 127.997 36.536C128.046 38.0301 127.534 39.4872 126.564 40.6088C125.594 41.7305 124.241 42.432 122.78 42.5697C121.319 42.7074 119.862 42.271 118.707 41.3497L118.167 40.8574L93.7767 15.9995C92.6988 14.9006 92.0933 13.4104 92.0933 11.8566C92.0933 10.3027 92.6988 8.81249 93.7767 7.71359Z" fill="#432A66" />
            </g>
            <defs>
              <filter id="filter0_d_1_316" x="0" y="-0.00585938" width="128" height="127" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-13" dy="4" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_316" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_316" result="shape" />
              </filter>
            </defs>
          </svg>
        </motion.div>

        {/* Icon 2 - Bottom Left Circle */}
        <motion.div
          className="absolute bottom-[11%] left-[26%] transform scale-[0.7]  "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.2, rotate: 0, y: 0 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg width="137" height="105" viewBox="0 0 137 105" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M121.127 1.85887C119.666 0.913516 117.995 0.341597 116.26 0.193385C114.526 0.0451727 112.782 0.325207 111.182 1.00887L58.737 21.6639C57.4966 22.1734 56.1679 22.4334 54.827 22.4289H21.252C18.434 22.4289 15.7315 23.5483 13.7389 25.5409C11.7464 27.5334 10.627 30.2359 10.627 33.0539V33.9039H0.00195312V59.4039H10.627V60.5089C10.6935 63.2824 11.8423 65.9198 13.8277 67.8576C15.8131 69.7953 18.4777 70.8797 21.252 70.8789L34.002 97.9089C34.8653 99.7291 36.2245 101.269 37.9235 102.351C39.6225 103.434 41.5924 104.015 43.607 104.029H48.962C51.7651 104.006 54.4458 102.877 56.4201 100.887C58.3943 98.8968 59.502 96.2071 59.502 93.4039V71.8989L111.182 92.5539C112.455 93.0539 113.809 93.3133 115.177 93.3189C117.299 93.2798 119.364 92.6306 121.127 91.4489C122.525 90.5049 123.678 89.2416 124.491 87.7636C125.304 86.2855 125.753 84.6351 125.802 82.9489V10.6139C125.794 8.88426 125.364 7.18269 124.55 5.65696C123.735 4.13122 122.56 2.82745 121.127 1.85887ZM48.877 33.0539V60.5089H21.252V33.0539H48.877ZM48.877 93.4039H43.522L33.067 70.8789H48.877V93.4039ZM62.647 61.7839C61.6376 61.2685 60.5853 60.8419 59.502 60.5089V32.4589C60.5746 32.2359 61.6267 31.9231 62.647 31.5239L115.177 10.6139V82.6939L62.647 61.7839ZM126.057 36.0289V57.2789C128.875 57.2789 131.577 56.1595 133.57 54.1669C135.563 52.1743 136.682 49.4718 136.682 46.6539C136.682 43.8359 135.563 41.1334 133.57 39.1409C131.577 37.1483 128.875 36.0289 126.057 36.0289Z" fill="#432A66" />
          </svg>
        </motion.div>

        {/* Icon 3 - Bottom Right Circle */}
        <motion.div
          className="absolute bottom-[10%] right-[25.5%] transform scale-[0.65] "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.2, rotate: 0, y: 0 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg width="134" height="128" viewBox="0 0 134 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_306)">
              <path d="M43.9893 15.9819V30.9819H28.9893V15.9819H43.9893ZM21.4893 8.48193V38.4819H51.4893V8.48193H21.4893ZM81.4893 27.2319V42.2319H66.4893V27.2319H81.4893ZM58.9893 19.7319V49.7319H88.9893V19.7319H58.9893ZM43.9893 60.9819V75.9819H28.9893V60.9819H43.9893ZM21.4893 53.4819V83.4819H51.4893V53.4819H21.4893Z" fill="#432A66" />
              <path d="M96.4893 38.4819V60.9819H73.9893V83.4819H51.4893V113.482H126.489V38.4819H96.4893ZM81.4893 68.4819H96.4893V83.4819H81.4893V68.4819ZM73.9893 105.982H58.9893V90.9819H73.9893V105.982ZM96.4893 105.982H81.4893V90.9819H96.4893V105.982ZM118.989 105.982H103.989V90.9819H118.989V105.982ZM118.989 83.4819H103.989V68.4819H118.989V83.4819ZM103.989 60.9819V45.9819H118.989V60.9819H103.989Z" fill="#432A66" />
            </g>
            <defs>
              <filter id="filter0_d_1_306" x="-7.01074" y="-5.01807" width="141" height="140" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-11" dy="4" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_306" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_306" result="shape" />
              </filter>
            </defs>
          </svg>
        </motion.div>
      </div>

      <div className="flex flex-col items-center space-y-4 absolute top-50">
        {/* Top row: Label + Number */}
        <div className="flex items-center space-x-4">
          {/* Left pill */}
          <div className="px-6 py-3 bg-white/40 border border-white shadow-md rounded-full">
            <span className="text-lg font-extrabold bg-gradient-to-r from-[#47099F] to-[#F8AD1D] bg-clip-text text-transparent">
              A: Architecture
            </span>
          </div>

          {/* Circle number */}
          <div className="w-16 h-16 flex items-center justify-center bg-white/40 border border-white shadow-md rounded-full">
            <span className="text-lg font-extrabold bg-gradient-to-r from-[#47099F] to-[#F8AD1D] bg-clip-text text-transparent">1</span>
          </div>
        </div>

        {/* Description */}
        <p className="max-w-sm text-center text-base font-medium bg-gradient-to-r from-[#47099F] to-[#F8AD1D] bg-clip-text text-transparent">
          BIM & Drafting Services → For precise design documentation, 3D modeling, and construction-ready plans.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-4 absolute bottom-75 right-90">
        {/* Top row: Label + Number */}
        <div className="flex items-center space-x-4">
          {/* Left pill */}
          <div className="px-6 py-3 bg-white/40 border border-white shadow-md rounded-full">
            <span className="text-lg font-extrabold bg-gradient-to-r from-[#47099F] to-[#F8AD1D] bg-clip-text text-transparent">
              C: Construction
            </span>
          </div>

          {/* Circle number */}
          <div className="w-16 h-16 flex items-center justify-center bg-white/40 border border-white shadow-md rounded-full">
            <span className="text-lg font-extrabold bg-gradient-to-r from-[#47099F] to-[#F8AD1D] bg-clip-text text-transparent">3</span>
          </div>
        </div>

        {/* Description */}
        <p className="max-w-sm text-center text-base font-medium bg-gradient-to-r from-[#47099F] to-[#F8AD1D] bg-clip-text text-transparent">
          Needs: Branding & Digital Marketing → To attract clients, showcase completed projects.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-4 absolute bottom-75 left-90">
        {/* Top row: Label + Number */}
        <div className="flex items-center space-x-4">
          {/* Left pill */}
          <div className="px-6 py-3 bg-white/40 border border-white shadow-md rounded-full">
            <span className="text-lg font-extrabold bg-gradient-to-r from-[#47099F] to-[#F8AD1D] bg-clip-text text-transparent">
              E: Engineering
            </span>
          </div>

          {/* Circle number */}
          <div className="w-16 h-16 flex items-center justify-center bg-white/40 border border-white shadow-md rounded-full">
            <span className="text-lg font-extrabold bg-gradient-to-r from-[#47099F] to-[#F8AD1D] bg-clip-text text-transparent">2</span>
          </div>
        </div>

        {/* Description */}
        <p className="max-w-sm text-center text-base font-medium bg-gradient-to-r from-[#47099F] to-[#F8AD1D] bg-clip-text text-transparent">
          Technical Business Development → To secure projects, create proposals.
        </p>
      </div>


      {/* View Services Button with hover animation */}
      <button className="translate-y-30 mt-0 px-7 py-3 rounded-lg text-white text-base font-semibold shadow-lg bg-[#4A2FB2] hover:bg-[#5E3CCB] transition-all duration-300 hover:scale-105 hover:shadow-xl">
        View our services
      </button>
    </section>
  );
};

export default Deals;