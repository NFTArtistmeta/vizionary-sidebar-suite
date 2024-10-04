import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, BarChartIcon, UsersIcon, SettingsIcon } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: <HomeIcon className="h-5 w-5" />, label: 'Dashboard', to: '/' },
    { icon: <BarChartIcon className="h-5 w-5" />, label: 'Analytics', to: '/analytics' },
    { icon: <UsersIcon className="h-5 w-5" />, label: 'Team', to: '/team' },
    { icon: <SettingsIcon className="h-5 w-5" />, label: 'Settings', to: '/settings' },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Startup Dashboard</h1>
      <nav>
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 rounded-lg ${
                isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;