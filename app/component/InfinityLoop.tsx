import React from 'react';

const InfinityLoops = () => {
  return (
    <div className="absolute z-20 flex items-center justify-center" 
         style={{ 
           top: '200px', // Position above the globe
           left: '50%', 
           transform: 'translateX(-50%)' 
         }}>
      <div className="relative w-[300px] h-[200px]">
        {/* Base infinity loop (static background) */}
        <svg 
          width="300px" 
          height="200px" 
          viewBox="0 0 187.3 93.7"
          className="absolute top-0 left-0 transform scale-[2]"
          style={{
            fill: 'none',
            stroke: '#E1E8FF',
            strokeWidth: '8',
            opacity: '0.3'
          }}
        >
          <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"/>
        </svg>
        
        {/* Animated infinity loop with blur effect */}
        <svg 
          width="300px" 
          height="200px" 
          viewBox="0 0 187.3 93.7"
          className="absolute top-0 left-0 transform scale-[2] animate-infinity-flow"
          style={{
            fill: 'none',
            strokeWidth: '8',
            strokeDasharray: '60 172',
            strokeLinecap: 'round',
            filter: 'blur(8px)',
            stroke: 'url(#infinityGradient1)'
          }}
        >
          <defs>
            <linearGradient id="infinityGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#83A1FF"/>
              <stop offset="25%" stopColor="#674CD5"/>
              <stop offset="50%" stopColor="#d1710a"/>
              <stop offset="75%" stopColor="#83A1FF"/>
              <stop offset="100%" stopColor="#674CD5"/>
            </linearGradient>
          </defs>
          <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"/>
        </svg>
        
        {/* Main animated infinity loop */}
        <svg 
          width="300px" 
          height="200px" 
          viewBox="0 0 187.3 93.7"
          className="absolute top-0 left-0 transform scale-[2] animate-infinity-flow"
          style={{
            fill: 'none',
            strokeWidth: '6',
            strokeDasharray: '60 172',
            strokeLinecap: 'round',
            stroke: 'url(#infinityGradient2)'
          }}
        >
          <defs>
            <linearGradient id="infinityGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#83A1FF"/>
              <stop offset="25%" stopColor="#674CD5"/>
              <stop offset="50%" stopColor="#d1710a"/>
              <stop offset="75%" stopColor="#83A1FF"/>
              <stop offset="100%" stopColor="#674CD5"/>
            </linearGradient>
          </defs>
          <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"/>
        </svg>
        
        <style jsx>{`
          @keyframes infinity-flow {
            0% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: 232;
            }
          }
          
          .animate-infinity-flow {
            animation: infinity-flow 4s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default InfinityLoops;