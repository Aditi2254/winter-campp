import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gamepad2, Trophy, Users, BarChart3, GraduationCap } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/', icon: Gamepad2, label: 'Dashboard' },
    { path: '/training', icon: GraduationCap, label: 'Training' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/teams', icon: Users, label: 'Teams' },
    { path: '/tournaments', icon: Trophy, label: 'Tournaments' },
  ];

  return (
    <div className="w-64 bg-gray-800 min-h-screen p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-500 flex items-center">
          <Gamepad2 className="mr-2 h-8 w-8" />
          E-Sports Pro
        </h1>
      </div>
      
      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;