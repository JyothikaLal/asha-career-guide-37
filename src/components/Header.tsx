
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-asha-purple text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-asha-purple text-xl font-bold">A</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">Asha</h1>
            <p className="text-xs">Women Career Engagement Assistant</p>
          </div>
        </div>
        <div className="text-sm hidden md:block">
          <span>JobsForHer Foundation</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
