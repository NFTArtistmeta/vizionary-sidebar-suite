import React from 'react';
import { BellIcon, UserCircleIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <div className="flex items-center space-x-4">
          <BellIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
          <UserCircleIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;