import React, { useState } from 'react';
import { UserRole, ServiceRequest, RequestStatus } from '../../types';
import Header from '../shared/Header';
import { DUMMY_VETS, DUMMY_REQUESTS, DUMMY_FARMERS } from '../../data';
import { CheckIcon, ClockIcon, PaperclipIcon, PhoneIcon, VideoIcon } from '../icons/Icons';

interface DoctorDashboardProps {
  onLogout: () => void;
}

const DoctorDashboard: React.FC<DoctorDashboardProps> = ({ onLogout }) => {
  const doctor = DUMMY_VETS[2]; // Simulate logged in as Dr. Rebecca Atuhaire
  const [isAvailable, setIsAvailable] = useState(doctor.isAvailable);
  const [requests, setRequests] = useState<ServiceRequest[]>(DUMMY_REQUESTS.filter(r => r.vetId === doctor.id));

  const newRequests = requests.filter(r => r.status === RequestStatus.PENDING || r.status === RequestStatus.ASSIGNED);
  const activeRequests = requests.filter(r => r.status === RequestStatus.ACCEPTED || r.status === RequestStatus.EN_ROUTE);
  const completedRequests = requests.filter(r => r.status === RequestStatus.COMPLETED);

  const handleAcceptRequest = (requestId: string) => {
    setRequests(prev => prev.map(r => r.id === requestId ? { ...r, status: RequestStatus.ACCEPTED } : r));
    // Here you would also trigger the farmer's UI to update to tracking view
  };

  return (
    <div>
      <Header onLogout={onLogout} role={UserRole.DOCTOR} userName={doctor.name} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-center bg-white p-4 rounded-lg shadow-soft mb-8">
            <div>
                <h1 className="text-2xl font-bold text-text">Doctor Dashboard</h1>
                <p className="text-text-light">Welcome back, {doctor.name}.</p>
            </div>
            <div className="flex items-center gap-4">
                <span className="font-semibold text-text-light">Your Status:</span>
                <label htmlFor="availability-toggle" className="flex items-center cursor-pointer">
                    <div className="relative">
                        <input type="checkbox" id="availability-toggle" className="sr-only" checked={isAvailable} onChange={() => setIsAvailable(!isAvailable)} />
                        <div className={`block w-14 h-8 rounded-full ${isAvailable ? 'bg-success' : 'bg-gray-300'}`}></div>
                        <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${isAvailable ? 'translate-x-6' : ''}`}></div>
                    </div>
                    <div className="ml-3 font-semibold">
                        {isAvailable ? 'Available' : 'Busy'}
                    </div>
                </label>
            </div>
        </div>

        {/* Requests Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* New Requests */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-text">New Requests ({newRequests.length})</h2>
            {newRequests.length > 0 ? newRequests.map(req => {
                const farmer = DUMMY_FARMERS.find(f => f.id === req.farmerId);
                const animal = farmer?.animals.find(a => a.id === req.animalId);
                return (
                    <div key={req.id} className="bg-white p-4 rounded-lg shadow-soft animate-fade-in-up">
                        <p className="text-sm text-text-light">From: <span className="font-semibold text-text">{farmer?.name}</span></p>
                        <p className="font-bold my-1">{animal?.type} - "{animal?.name}"</p>
                        <p className="text-sm text-text-light bg-panel p-2 rounded-md">"{req.description}"</p>
                        <button 
                            onClick={() => handleAcceptRequest(req.id)}
                            className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2 bg-brand text-white rounded-md hover:bg-brand-dark font-semibold text-sm">
                            <CheckIcon /> Accept Request
                        </button>
                    </div>
                );
            }) : <p className="text-muted text-sm">No new requests.</p>}
          </div>

          {/* Active Request */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-text">Active Consultation ({activeRequests.length})</h2>
            {activeRequests.length > 0 ? activeRequests.map(req => {
                 const farmer = DUMMY_FARMERS.find(f => f.id === req.farmerId);
                 const animal = farmer?.animals.find(a => a.id === req.animalId);
                return(
                    <div key={req.id} className="bg-white p-4 rounded-lg shadow-soft border-l-4 border-accent animate-fade-in-up">
                        <p className="font-bold">{farmer?.name} - {animal?.type} "{animal?.name}"</p>
                        <p className="text-sm text-text-light mb-3">Status: <span className="font-semibold">{req.status}</span></p>
                        <div className="flex gap-2">
                             <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent text-white rounded-md hover:bg-blue-700 font-semibold text-sm"><PhoneIcon className="w-4 h-4" /> Live Tracking</button>
                             <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 text-text rounded-md hover:bg-gray-300 font-semibold text-sm"><VideoIcon className="w-4 h-4 text-brand" /> Chat</button>
                        </div>
                         <button className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2 border-2 border-dashed text-text-light rounded-md hover:border-brand hover:text-brand font-semibold text-sm">
                            <PaperclipIcon /> Upload Prescription
                        </button>
                    </div>
                );
            }) : <p className="text-muted text-sm">No active consultations.</p>}
          </div>
          
          {/* Completed */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-text">Completed Today ({completedRequests.length})</h2>
             {completedRequests.length > 0 ? completedRequests.map(req => {
                 const farmer = DUMMY_FARMERS.find(f => f.id === req.farmerId);
                 const animal = farmer?.animals.find(a => a.id === req.animalId);
                return(
                    <div key={req.id} className="bg-white p-4 rounded-lg shadow-soft opacity-70">
                       <div className="flex justify-between items-center">
                            <div>
                               <p className="font-semibold">{farmer?.name}</p>
                               <p className="text-sm text-text-light">{animal?.type} Check-up</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-success">UGX 85,000</p>
                                <p className="text-xs text-muted">Paid</p>
                            </div>
                       </div>
                    </div>
                );
            }) : <p className="text-muted text-sm">No jobs completed yet today.</p>}
          </div>

        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;