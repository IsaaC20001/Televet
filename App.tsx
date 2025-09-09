import React, { useState, useCallback } from 'react';
import { Vet } from './types';
import Login from './components/Login';
import RoleSelector from './components/RoleSelector';
import FarmerDashboard from './components/dashboards/FarmerDashboard';
import DoctorDashboard from './components/dashboards/DoctorDashboard';
import ClinicDashboard from './components/dashboards/ClinicDashboard';
import AdminDashboard from './components/dashboards/AdminDashboard';
import { UserRole } from './types';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentUserRole, setCurrentUserRole] = useState<UserRole | null>(null);
  const [globalAlert, setGlobalAlert] = useState<string | null>(null);

  const handleLogin = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const handleSelectRole = useCallback((role: UserRole) => {
    setCurrentUserRole(role);
  }, []);
  
  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setCurrentUserRole(null);
  }, []);

  const handleSendAlert = (message: string) => {
    setGlobalAlert(message);
    setTimeout(() => setGlobalAlert(null), 8000); // Alert disappears after 8 seconds
  };

  const renderContent = () => {
    if (!isLoggedIn) {
      return <Login onLogin={handleLogin} />;
    }

    if (!currentUserRole) {
      return <RoleSelector onSelectRole={handleSelectRole} />;
    }

    switch (currentUserRole) {
      case UserRole.FARMER:
        return <FarmerDashboard onLogout={handleLogout} />;
      case UserRole.DOCTOR:
        return <DoctorDashboard onLogout={handleLogout} />;
      case UserRole.CLINIC:
        return <ClinicDashboard onLogout={handleLogout} />;
      case UserRole.ADMIN:
        return <AdminDashboard onLogout={handleLogout} onSendAlert={handleSendAlert} />;
      default:
        return <RoleSelector onSelectRole={handleSelectRole} />;
    }
  };

  return (
    <div className="min-h-screen bg-panel font-sans text-text">
       {globalAlert && (
        <div className="bg-yellow-400 text-center p-2 text-sm font-semibold text-yellow-900 animate-fade-in-up">
          <strong>Global Alert:</strong> {globalAlert}
        </div>
      )}
      <main className="w-full">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;