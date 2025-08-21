import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const LoadingState: React.FC = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 50);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] w-full ">
      
      
      <div className="flex items-center justify-center gap-4">
        <Loader type="triangle" />
        <Loader type="rect" />
        <Loader type="circle" />
      </div>
      
      <div className="w-full max-w-md mt-8">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                Loading
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-indigo-600">
                {progress}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
            <div 
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600 transition-all duration-300 ease-in-out"
            ></div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .loader {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
};


export default LoadingState;