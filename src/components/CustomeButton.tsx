import React from 'react';

const CustomeButton: React.FC<{label: string, highlighted?: boolean}> = ({ label, highlighted }) => {
  return (
    <button className={`bg-gray-200 text-green-700 font-medium py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 ${highlighted ? 'focus:ring-blue-500 hover:underline' : ''}`}>
      {label}
    </button>
  );
};

export default CustomeButton;
