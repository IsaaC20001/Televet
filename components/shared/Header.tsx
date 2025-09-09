import React from 'react';
import { StethoscopeIcon, UserCircleIcon } from '../icons/Icons';
import { UserRole } from '../../types';

interface HeaderProps {
  onLogout: () => void;
  role: UserRole;
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ onLogout, role, userName }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2 text-brand">
               <StethoscopeIcon />
               <span className="font-bold text-2xl tracking-tight">Televet</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
             <div className="text-right">
                <p className="font-semibold text-sm text-text">{userName}</p>
                <p className="text-xs text-muted -mt-1">{role} Dashboard</p>
             </div>
             <UserCircleIcon className="w-10 h-10 text-gray-300"/>
            <button
              onClick={onLogout}
              className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;