import React from 'react';
import LoadingState from './LoadingState';

interface LoadingPageProps {
  message?: string;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ message = 'Loading your experience' }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-[#D8DDED] to-[#E1E8FF] z-50">
      <div className="max-w-md w-full p-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2"></h2>
          <p className="text-gray-600">{message}</p>
        </div>
        
        <LoadingState />
      </div>
    </div>
  );
};

export default LoadingPage;