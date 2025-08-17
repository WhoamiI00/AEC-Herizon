'use client';

import React from 'react';

const Horizon = () => {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-[#3D3B7A] text-center">
        Why Choose <span className="bg-gradient-to-r from-[#7B3DEA] via-[#8F51E7] to-[#D47748] bg-clip-text text-transparent">AEC Horizon?</span>
      </h2>

      {/* Grid wrapper */}
      <div className="relative mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="rounded-3xl shadow-[0_10px_30px_rgba(28,33,66,0.08)] bg-[#ECEFFB]/60 backdrop-blur-sm border border-white/70">
          <div className="rounded-t-3xl px-7 pt-6 pb-3 border-b border-white/60">
            <h3 className="text-xl font-semibold">
              <span className="bg-gradient-to-r from-[#6D53D2] to-[#D08A49] bg-clip-text text-transparent">
                Transparent Process
              </span>
            </h3>
          </div>
          <p className="px-7 py-6 text-[18px] leading-7 text-[#322E5F]">
            From consultation to delivery, every step mapped.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-3xl shadow-[0_10px_30px_rgba(28,33,66,0.08)] bg-[#ECEFFB]/60 backdrop-blur-sm border border-white/70">
          <div className="rounded-t-3xl px-7 pt-6 pb-3 border-b border-white/60">
            <h3 className="text-xl font-semibold">
              <span className="bg-gradient-to-r from-[#6D53D2] to-[#D08A49] bg-clip-text text-transparent">
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
            <h3 className="text-xl font-semibold">
              <span className="bg-gradient-to-r from-[#6D53D2] to-[#D08A49] bg-clip-text text-transparent">
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
            <h3 className="text-xl font-semibold">
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
        <div
  className="absolute top-39 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white flex items-center justify-center shadow-md z-10"
  style={{
    clipPath: "polygon(35% 0%, 65% 0%, 65% 35%, 100% 35%, 100% 65%, 65% 65%, 65% 100%, 35% 100%, 35% 65%, 0% 65%, 0% 35%, 35% 35%)"
  }}
>
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
