import React from "react";

const InfinityLoops = () => {
  return (
    <div
      className="absolute z-20 flex items-center justify-center"
      style={{ top: "200px", left: "50%", transform: "translateX(-50%)" }}
    >
      {/* widen container for 3 loops */}
      <div className="relative w-[720px] h-[200px]">
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
          <path d="
            M 20,50
            C 40,20 80,20 100,50
            C 120,80 160,80 180,50
            C 200,20 240,20 260,50
            C 240,80 200,80 180,50
            C 160,20 120,20 100,50
            C 80,80 40,80 20,50
          " />
        </svg>

        {/* Blurred glow */}
        <svg
          viewBox="0 0 300 100"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            fill: "none",
            strokeWidth: 10,
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
          <path d="
            M 20,50
            C 40,20 80,20 100,50
            C 120,80 160,80 180,50
            C 200,20 240,20 260,50
            C 240,80 200,80 180,50
            C 160,20 120,20 100,50
            C 80,80 40,80 20,50
          " />
        </svg>

        {/* Main animated stroke */}
        <svg
          viewBox="0 0 300 100"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            fill: "none",
            strokeWidth: 9,
            strokeLinecap: "round",
            stroke: "url(#movingGradient)"
          }}
        >
          <path d="
            M 20,50
            C 40,20 80,20 100,50
            C 120,80 160,80 180,50
            C 200,20 240,20 260,50
            C 240,80 200,80 180,50
            C 160,20 120,20 100,50
            C 80,80 40,80 20,50
          " />
        </svg>
      </div>
    </div>
  );
};

export default InfinityLoops;
