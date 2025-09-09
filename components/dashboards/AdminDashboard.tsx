import React, { useState } from 'react';
import { UserRole } from '../../types';
import Header from '../shared/Header';
import { DUMMY_ADMIN_DATA } from '../../data';
import DataTable from '../shared/DataTable';
import { FarmerIcon, VetIcon, ClinicIcon, RevenueIcon, CheckIcon, CloseIcon, BellIcon } from '../icons/Icons';

interface AdminDashboardProps {
  onLogout: () => void;
  onSendAlert: (message: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout, onSendAlert }) => {
  const adminData = DUMMY_ADMIN_DATA;
  const [verifications, setVerifications] = useState(adminData.verifications);
  const [alertMessage, setAlertMessage] = useState('');

  const handleVerification = (id: string, approve: boolean) => {
    setVerifications(prev => prev.filter(v => v.id !== id));
    console.log(`Verification for ${id} was ${approve ? 'approved' : 'rejected'}`);
  };

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (alertMessage.trim()) {
      onSendAlert(alertMessage);
      setAlertMessage('');
    }
  };

  return (
    <div>
      <Header onLogout={onLogout} role={UserRole.ADMIN} userName="John Ssemanda" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <h1 className="text-2xl font-bold text-text mb-6">Admin Overview</h1>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <KpiCard title="Total Farmers" value={adminData.kpis.farmers.toString()} icon={<FarmerIcon />} />
            <KpiCard title="Verified Doctors" value={adminData.kpis.doctors.toString()} icon={<VetIcon />} />
            <KpiCard title="Registered Clinics" value={adminData.kpis.clinics.toString()} icon={<ClinicIcon />} />
            <KpiCard title="Total Revenue (UGX)" value={adminData.kpis.revenue.toLocaleString()} icon={<RevenueIcon />} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Verification Panel */}
            <div className="lg:col-span-2">
                <h2 className="text-xl font-bold text-text mb-4">Pending Verifications</h2>
                <div className="bg-white shadow-soft rounded-lg">
                    {verifications.length > 0 ? verifications.map(item => (
                        <div key={item.id} className="flex justify-between items-center p-4 border-b last:border-b-0">
                            <div>
                                <p className="font-semibold text-text">{item.name}</p>
                                <p className={`text-sm font-semibold ${item.type === 'Doctor' ? 'text-accent' : 'text-purple-600'}`}>{item.type}</p>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => handleVerification(item.id, true)} className="p-2 bg-green-100 text-success rounded-full hover:bg-green-200"><CheckIcon /></button>
                                <button onClick={() => handleVerification(item.id, false)} className="p-2 bg-red-100 text-danger rounded-full hover:bg-red-200"><CloseIcon /></button>
                            </div>
                        </div>
                    )) : (
                        <p className="p-6 text-center text-muted">No pending verifications.</p>
                    )}
                </div>
            </div>

            {/* Send Alert Panel */}
            <div>
                 <h2 className="text-xl font-bold text-text mb-4">Send Global Alert</h2>
                 <div className="bg-white shadow-soft rounded-lg p-6">
                     <form onSubmit={handleAlertSubmit}>
                        <label htmlFor="alert-message" className="text-sm font-medium text-text-light">Broadcast a message to all users</label>
                        <textarea 
                            id="alert-message" 
                            rows={3} 
                            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:outline-none bg-white text-black"
                            placeholder="e.g., Anthrax outbreak warning..."
                            value={alertMessage}
                            onChange={(e) => setAlertMessage(e.target.value)}
                        />
                        <button type="submit" className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2 bg-brand text-white rounded-md hover:bg-brand-dark font-semibold">
                            <BellIcon /> Send Alert
                        </button>
                     </form>
                 </div>
            </div>
        </div>

      </div>
    </div>
  );
};


interface KpiCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
}
const KpiCard: React.FC<KpiCardProps> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-soft flex items-center gap-4">
        <div className="bg-brand/10 text-brand rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
            {icon}
        </div>
        <div>
            <p className="text-sm font-medium text-text-light">{title}</p>
            <p className="text-2xl font-bold text-text">{value}</p>
        </div>
    </div>
)

export default AdminDashboard;