import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-[60px] leading-none mb-6 font-instrument-sans tracking-normal">
        <span className="text-[#4B336D] font-normal inline-block transition-all duration-300 hover:scale-105 hover:text-[#6772e5] cursor-pointer">Three Infinite Loops,</span>
        <br />
        <span className="bg-gradient-to-r from-[#4B336D] to-[#E1627F] text-transparent bg-clip-text font-semibold inline-block transition-all duration-300 hover:scale-105 hover:from-[#6772e5] hover:to-[#E1627F] cursor-pointer">One Global Impact.</span>
      </h1>
    </section>
  );
};

export default Hero;