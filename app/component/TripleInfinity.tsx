  import React from "react";

  const InfinityLoops = () => {
    return (
      <div
        className="absolute z-20 flex items-center justify-center"
        style={{ top: "200px", left: "50%", transform: "translateX(-50%)" }}
      >
        {/* widen container for larger, rounder 3 loops */}
        <div className="relative w-[820px] h-[220px]">
          {/* Base triple-loop (static background) */}
          <svg
            viewBox="0 0 300 100"
            className="absolute top-0 left-0 w-full h-full"
            style={{
              fill: "none",
              stroke: "#E1E8FF",
              strokeWidth: 8,
              opacity: 0.3
            }}
          >
            <path
              d="
                M 10 50 C 10 10 70 10 90 50 C 110 90 150 90 170 50 C 190 10 250 11 250 50 C 250 90 190 90 170 50 C 150 10 110 10 90 50 C 70 90 10 90 10 50
              
              "
            />
          </svg>

          {/* Blurred glow */}
          <svg
            viewBox="0 0 300 100"
            className="absolute top-0 left-0 w-full h-full"
            style={{
              fill: "none",
              strokeWidth: 12,
              strokeLinecap: "round",
              filter: "blur(12px)",
              stroke: "url(#movingGradient)"
            }}
          >
            <defs>
              <linearGradient
                id="movingGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#83A1FF" />
                <stop offset="25%" stopColor="#674CD5" />
                <stop offset="50%" stopColor="#d1710a" />
                <stop offset="75%" stopColor="#83A1FF" />
                <stop offset="100%" stopColor="#674CD5" />
                <animateTransform
                  attributeName="gradientTransform"
                  type="rotate"
                  from="0 150 50"
                  to="360 150 50"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </linearGradient>
            </defs>
            <path
              d="
                M 10 50 C 10 10 70 10 90 50 C 110 90 150 90 170 50 C 190 10 250 11 250 50 C 250 90 190 90 170 50 C 150 10 110 10 90 50 C 70 90 10 90 10 50
              
              "
            />
          </svg>

          {/* Main animated stroke */}
          <svg
            viewBox="0 0 300 100"
            className="absolute top-0 left-0 w-full h-full"
            style={{
              fill: "none",
              strokeWidth: 10,
              strokeLinecap: "round",
              stroke: "url(#movingGradient)"
            }}
          >
            <path
              d="
                M 10 50 C 10 10 70 10 90 50 C 110 90 150 90 170 50 C 190 10 250 11 250 50 C 250 90 190 90 170 50 C 150 10 110 10 90 50 C 70 90 10 90 10 50
              "
            />
          </svg>
        </div>
      </div>
    );
  };

  export default InfinityLoops;
