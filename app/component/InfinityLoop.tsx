import React from "react";

const InfinityLoops = () => {
  return (
    <div
      className="absolute z-20 flex items-center justify-center"
      style={{ top: "200px", left: "50%", transform: "translateX(-50%)" }}
    >
      <div className="relative w-[400px] h-[200px]">
        
        {/* Base infinity loop (static background) */}
        <svg
          viewBox="0 0 187.3 93.7"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            fill: "none",
            stroke: "#E1E8FF",
            strokeWidth: "8",
            opacity: "0.3",
          }}
        >
          <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 
                   c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" />
        </svg>

        {/* Blurred glow infinity loop */}
        <svg
          viewBox="0 0 187.3 93.7"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            filter: "blur(12px)",
            stroke: "url(#movingGradient)",
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
                from="0 93.65 46.85"
                to="360 93.65 46.85"
                dur="8s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>

          <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 
                   c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" />
        </svg>
 
        {/* Main animated infinity loop */}
        <svg
          viewBox="0 0 187.3 93.7"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            fill: "none",
            strokeWidth: "6",
            strokeLinecap: "round",
            stroke: "url(#movingGradient)",
          }}
        >
          <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 
                   c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" />
        </svg>
      </div>
    </div>
  );
};

export default InfinityLoops;
