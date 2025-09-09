import React from 'react';
import { UserRole } from '../types';
import { FarmerIcon, VetIcon, ClinicIcon, AdminIcon } from './icons/Icons';

interface RoleSelectorProps {
  onSelectRole: (role: UserRole) => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ onSelectRole }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-panel p-4 animate-fade-in-up">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-text">Choose Your Role</h1>
        <p className="text-text-light mt-2">Select a dashboard to view the prototype.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
        <RoleCard
          role={UserRole.FARMER}
          description="Request services, manage your animals, and track vet visits."
          icon={<FarmerIcon />}
          onClick={() => onSelectRole(UserRole.FARMER)}
        />
        <RoleCard
          role={UserRole.DOCTOR}
          description="Manage requests, conduct consultations, and update health records."
          icon={<VetIcon />}
          onClick={() => onSelectRole(UserRole.DOCTOR)}
        />
        <RoleCard
          role={UserRole.CLINIC}
          description="Oversee clinic operations, assign doctors, and manage appointments."
          icon={<ClinicIcon />}
          onClick={() => onSelectRole(UserRole.CLINIC)}
        />
        <RoleCard
          role={UserRole.ADMIN}
          description="Manage platform users, verify credentials, and view analytics."
          icon={<AdminIcon />}
          onClick={() => onSelectRole(UserRole.ADMIN)}
        />
      </div>
    </div>
  );
};

interface RoleCardProps {
    role: UserRole;
    description: string;
    icon: React.ReactNode;
    onClick: () => void;
}

const RoleCard: React.FC<RoleCardProps> = ({ role, description, icon, onClick }) => (
    <button 
        onClick={onClick}
        className="bg-white p-6 rounded-lg shadow-soft text-center hover:shadow-lift hover:-translate-y-1 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
    >
        <div className="bg-brand/10 text-brand rounded-full w-16 h-16 flex items-center justify-center mx-auto">
            {icon}
        </div>
        <h3 className="mt-4 text-xl font-bold text-text">{role}</h3>
        <p className="mt-2 text-sm text-text-light">{description}</p>
    </button>
)

export default RoleSelector;