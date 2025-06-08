import React from 'react';

const Tooltip = ({ message, children }) => {
  return (
    <div className="relative flex items-center justify-center">
      {children}
      <div className="absolute bottom-full mb-2 px-3 py-1 bg-gray-700 text-white text-xs rounded-md whitespace-nowrap opacity-100 pointer-events-none">
        {message}
      </div>
    </div>
  );
};

export default Tooltip; 